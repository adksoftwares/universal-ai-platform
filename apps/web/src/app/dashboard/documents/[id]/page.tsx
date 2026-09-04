"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowLeft, Download, Trash2, Calendar, AlertCircle, MessageSquare, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { ActionProposal } from "@/components/common/ActionProposal";

export default function DocumentDetailPage() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "I've analyzed this contract. What would you like to know?" }
  ]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { role: "user", content: chatInput }]);
    setChatInput("");
    
    // Mock response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Based on page 2, the probationary period is exactly 3 months from the start date." 
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <Link href="/dashboard/documents" className="text-sm text-blue-600 hover:underline flex items-center mb-2">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Documents
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            Employment_Contract_2026.pdf
          </h1>
          <div className="flex gap-3 mt-2 text-sm text-slate-500">
            <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-700">Employment</span>
            <span>2.4 MB</span>
            <span>Uploaded Aug 30</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-slate-600">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
          <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200">
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Preview */}
        <div className="lg:col-span-5 h-[800px] bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 shadow-sm border border-slate-200">
            Page 1 of 5
          </div>
          <FileText className="w-24 h-24 text-slate-300 mb-4" />
          <p className="text-slate-500 font-medium text-sm">Secure Document Preview</p>
          <p className="text-slate-400 text-xs mt-2 max-w-xs text-center px-4">
            (In a real implementation, PDF.js or a native viewer would render the actual document here)
          </p>
        </div>

        {/* Right Column: AI Understanding & Chat */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-[800px]">
          
          {/* Scrollable Intelligence Section */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            
            <Card className="border-indigo-100 shadow-sm bg-indigo-50/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-indigo-900">
                  <Sparkles className="w-5 h-5 text-indigo-500" /> AI Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-indigo-900/80 leading-relaxed">
                This document is a standard full-time employment contract between you and TechCorp Inc., outlining your role as Senior Developer starting October 1, 2026. It includes standard confidentiality and non-compete clauses.
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Important Dates */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                  <CardTitle className="text-base flex items-center gap-2 text-slate-800">
                    <Calendar className="w-4 h-4 text-orange-500" /> Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    <div className="p-4 flex justify-between items-start hover:bg-slate-50">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">October 1, 2026</p>
                        <p className="text-xs text-slate-500 mt-0.5">Start Date</p>
                      </div>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium">Page 1</span>
                    </div>
                    <div className="p-4 flex justify-between items-start hover:bg-slate-50">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">October 15, 2026</p>
                        <p className="text-xs text-slate-500 mt-0.5">Signed Copy Due</p>
                      </div>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium">Page 5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Required Actions */}
              <Card className="border-slate-200 shadow-sm border-t-4 border-t-emerald-500">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                  <CardTitle className="text-base flex items-center gap-2 text-slate-800">
                    <AlertCircle className="w-4 h-4 text-emerald-500" /> What You May Need To Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div>
                    <p className="text-sm text-slate-700 font-medium mb-2">Sign and return by Oct 15</p>
                    <Button size="sm" variant="outline" className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 text-xs h-8">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Create Task
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Document Q&A Chat */}
          <Card className="border-slate-200 shadow-sm flex flex-col h-80 shrink-0">
            <div className="p-3 border-b border-slate-100 bg-slate-50 rounded-t-xl flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-semibold text-slate-700">Ask questions about this document</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] text-sm px-4 py-2.5 rounded-2xl ${
                    msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-slate-100 text-slate-800 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-100 bg-white rounded-b-xl">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a specific question..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button size="icon" onClick={handleSend} disabled={!chatInput.trim()} className="bg-blue-600 h-9 w-9 rounded-lg">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
