"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, BrainCircuit, Check, X, Send } from "lucide-react";

export default function StudySessionPage() {
  const [mode, setMode] = useState<"learn" | "practice">("learn");
  const [chatInput, setChatInput] = useState("");
  
  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 shrink-0">
        <div>
          <Link href="/dashboard/learning" className="text-sm text-blue-600 hover:underline flex items-center mb-1">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Learning
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Python Functions</h1>
          <p className="text-slate-500 text-sm">Learning Objective: Understand how to define and call functions.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <Button 
            variant={mode === "learn" ? "default" : "ghost"} 
            size="sm"
            onClick={() => setMode("learn")}
            className={mode === "learn" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}
          >
            <BookOpen className="w-4 h-4 mr-2" /> Learn
          </Button>
          <Button 
            variant={mode === "practice" ? "default" : "ghost"} 
            size="sm"
            onClick={() => setMode("practice")}
            className={mode === "practice" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}
          >
            <BrainCircuit className="w-4 h-4 mr-2" /> Practice
          </Button>
        </div>
      </div>

      {mode === "learn" ? (
        <div className="flex-1 flex flex-col min-h-0 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 md:p-10 prose prose-slate max-w-none">
            <h2>What is a Function?</h2>
            <p>A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.</p>
            
            <h3>Syntax</h3>
            <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm">
{`def function_name(parameters):
    """docstring"""
    statement(s)`}
            </pre>
            
            <h3>Example</h3>
            <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm">
{`def greet(name):
    print(f"Hello, {name}!")

greet("Alice") # Output: Hello, Alice!`}
            </pre>
          </div>
          
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <Button variant="outline" className="text-slate-600">Explain More Simply</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Mark Complete & Next</Button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col min-h-0 gap-4">
          <Card className="border-indigo-100 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2 block">Question 1 of 5</span>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                What keyword is used to define a function in Python?
              </h3>
              
              <div className="space-y-3">
                {['func', 'define', 'def', 'function'].map((opt, i) => (
                  <button key={opt} className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                    i === 2 ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
                  }`}>
                    <span className="font-medium">{opt}</span>
                  </button>
                ))}
              </div>

              {/* Explanation (Visible after answering) */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-emerald-800 font-medium flex items-center gap-2 mb-1">
                  <Check className="w-5 h-5" /> Correct!
                </p>
                <p className="text-sm text-emerald-900/80">
                  The `def` keyword introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

    </div>
  );
}
