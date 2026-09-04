"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ActionProposal } from "@/components/common/ActionProposal";
import { Mic, Paperclip, Send, Settings, Search, Plus, MessageSquare, Copy, RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react";

type Message = { id: number; role: "user" | "assistant"; content: string };
type ChatSession = { id: string; title: string; updatedAt: number; messages: Message[] };

export default function AIAssistantPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("ai_chat_sessions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatSession[];
        if (parsed.length > 0) {
          setSessions(parsed);
          setCurrentSessionId(parsed[0].id);
          return;
        }
      } catch (e) {
        console.error("Failed to parse chat sessions", e);
      }
    }
    // Default if nothing saved
    handleNewChat(false);
  }, []);

  // Save to local storage whenever sessions change
  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem("ai_chat_sessions", JSON.stringify(sessions));
    }
  }, [sessions]);

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const messages = currentSession ? currentSession.messages : [];

  // Auto scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !currentSessionId) return;

    const userMessage: Message = { id: Date.now(), role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    
    // Auto-generate title if it's the first real user message
    let newTitle = currentSession?.title;
    if (updatedMessages.length === 2 && newTitle === "New Chat") {
      newTitle = input.trim().substring(0, 30) + (input.length > 30 ? "..." : "");
    }

    const updateSession = (newMsgs: Message[], title: string) => {
      setSessions(prev => prev.map(s => 
        s.id === currentSessionId 
          ? { ...s, messages: newMsgs, updatedAt: Date.now(), title } 
          : s
      ));
    };

    updateSession(updatedMessages, newTitle || "Chat");
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (data.error) {
        updateSession([...updatedMessages, {
          id: Date.now() + 1,
          role: "assistant",
          content: `Error: ${data.error} ${data.details ? `(${data.details})` : ""}`,
        }], newTitle || "Chat");
      } else {
        updateSession([...updatedMessages, {
          id: Date.now() + 1,
          role: "assistant",
          content: data.reply,
        }], newTitle || "Chat");
      }
    } catch {
      updateSession([...updatedMessages, {
        id: Date.now() + 1,
        role: "assistant",
        content: "Network error. Please check your connection and try again.",
      }], newTitle || "Chat");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleNewChat = (saveState: boolean = true) => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      updatedAt: Date.now(),
      messages: [{ id: Date.now(), role: "assistant", content: "Hello! I'm ready to help. What's on your mind today?" }]
    };
    if (saveState) {
      setSessions(prev => [newSession, ...prev]);
    } else {
      setSessions([newSession]);
    }
    setCurrentSessionId(newSession.id);
    setInput("");
  };

  const formatTime = (ts: number) => {
    const date = new Date(ts);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

      {/* Sidebar: Conversation History */}
      <div className="w-64 border-r border-slate-200 bg-slate-50 hidden md:flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <Button
            onClick={() => handleNewChat(true)}
            className="w-full justify-start bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            variant="outline"
          >
            <Plus className="w-4 h-4 mr-2" /> New Chat
          </Button>
        </div>

        <div className="p-2 border-b border-slate-200">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search history..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-100 border-transparent rounded-md focus:bg-white focus:border-slate-300 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sessions.sort((a, b) => b.updatedAt - a.updatedAt).map((chat) => (
            <button 
              key={chat.id} 
              onClick={() => setCurrentSessionId(chat.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors group ${currentSessionId === chat.id ? "bg-slate-200/70" : "hover:bg-slate-200/50"}`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className={`w-4 h-4 ${currentSessionId === chat.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                <span className={`text-sm font-medium truncate ${currentSessionId === chat.id ? "text-slate-900" : "text-slate-700"}`}>{chat.title}</span>
              </div>
              <span className="text-[10px] text-slate-400 pl-6">{formatTime(chat.updatedAt)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Chat Header */}
        <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0">
          <div>
            <h2 className="font-semibold text-slate-800">AI Assistant</h2>
            <p className="text-xs text-green-500 font-medium">● Connected · Gemini 3.6 Flash</p>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] md:max-w-[75%] ${msg.role === "user" ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3" : "w-full"}`}>

                {msg.role === "assistant" ? (
                  <div className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <SparklesIcon />
                    </div>
                    <div className="space-y-3 pt-1 w-full">
                      <div className="text-slate-800 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                        {msg.content}
                      </div>

                      {msg.content.toLowerCase().includes("reminder") && (
                        <ActionProposal
                          title="Call John"
                          type="reminder"
                          details={{ date: "Tomorrow", time: "09:00 AM" }}
                          onApprove={() => alert("Action executed!")}
                          onReject={() => alert("Action rejected.")}
                        />
                      )}

                      <div className="flex items-center gap-1 pt-1">
                        <Button
                          variant="ghost" size="icon"
                          className="h-7 w-7 text-slate-400 hover:text-slate-600"
                          onClick={() => handleCopy(msg.id, msg.content)}
                          title="Copy"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </Button>
                        {copied === msg.id && <span className="text-xs text-green-500">Copied!</span>}
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400"><ThumbsUp className="w-3.5 h-3.5" /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400"><ThumbsDown className="w-3.5 h-3.5" /></Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm md:text-base">{msg.content}</div>
                )}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-4 w-full">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 animate-pulse">
                  <SparklesIcon />
                </div>
                <div className="pt-3 flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto relative rounded-2xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all overflow-hidden flex items-end p-2">
            <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 hover:text-slate-600">
              <Paperclip className="w-5 h-5" />
            </Button>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Message your assistant..."
              className="flex-1 max-h-40 min-h-[44px] bg-transparent border-none outline-none resize-none py-3 px-3 text-sm md:text-base text-slate-800 placeholder:text-slate-400"
              rows={1}
              disabled={isLoading}
            />

            <div className="flex items-center gap-1 shrink-0 pb-1 pr-1">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 hidden sm:inline-flex">
                <Mic className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`w-10 h-10 rounded-xl transition-all ${input.trim() && !isLoading ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-200 text-slate-400"}`}
              >
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400">AI can make mistakes. Verify important information.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  );
}
