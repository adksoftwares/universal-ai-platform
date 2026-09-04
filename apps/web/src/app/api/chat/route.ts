import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key not configured." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
      systemInstruction:
        "You are a helpful personal AI assistant. You help users with tasks, reminders, learning, finance, health, travel, and daily life. Be concise, friendly, and helpful.",
    });

    // Build chat history (exclude the last user message)
    const rawHistory = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // 1. Strict Alternation: Gemini crashes if roles don't alternate (user -> model -> user).
    // Merge consecutive messages from the same role.
    let strictHistory: any[] = [];
    for (const msg of rawHistory) {
      if (strictHistory.length === 0) {
        if (msg.role === "user") strictHistory.push(msg);
      } else {
        if (strictHistory[strictHistory.length - 1].role === msg.role) {
          strictHistory[strictHistory.length - 1].parts[0].text += "\n\n" + msg.parts[0].text;
        } else {
          strictHistory.push(msg);
        }
      }
    }

    // 2. Sliding Window: Keep only the last 40 turns to prevent "Token Limit" or "Payload Too Large" errors
    const MAX_TURNS = 40;
    if (strictHistory.length > MAX_TURNS) {
      // Ensure we slice in a way that the first message remains "user"
      const startIndex = strictHistory.length - MAX_TURNS;
      strictHistory = strictHistory.slice(startIndex + (strictHistory[startIndex].role === "model" ? 1 : 0));
    }

    const chat = model.startChat({ history: strictHistory });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (err: any) {
    console.error("Gemini error:", err);
    return NextResponse.json({ 
      error: err.message || "Failed to get AI response.",
      details: err.toString()
    }, { status: 500 });
  }
}
