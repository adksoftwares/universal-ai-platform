"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Mail, Search, MessageSquare, Bot, BrainCircuit, ShieldCheck, XCircle, Send } from "lucide-react";
import { useState } from "react";

export default function CommunicationPage() {
  const [draftOpen, setDraftOpen] = useState(false);

  const threads = [
    { sender: "Sarah Jenkins", subject: "Q4 Roadmap Planning", preview: "Are we still on track to finalize the roadmap by next Tuesday...", date: "10:42 AM" },
    { sender: "University Admin", subject: "Important: Registration Deadline", preview: "Please ensure your course registration is submitted...", date: "Yesterday" },
    { sender: "Mom", subject: "Weekend Dinner", preview: "Are you still coming over for dinner this Saturday?", date: "Oct 12" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-6 h-6 text-indigo-500" /> Communication Center
          </h1>
          <p className="text-slate-500 text-sm mt-1">Review authorized messages, generate drafts, and extract tasks securely.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="border-slate-200 bg-white text-slate-700">
             Providers
           </Button>
           <Button className="bg-indigo-600 hover:bg-indigo-700">
             Compose
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Inbox List */}
        <div className="md:col-span-1 space-y-4">
          <div className="relative">
             <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search authorized comms..." 
               className="w-full bg-white border border-slate-200 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
             />
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 shadow-sm">
            {threads.map((thread, i) => (
              <div key={i} className={`p-4 cursor-pointer transition-colors ${i === 0 ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`font-semibold ${i === 0 ? 'text-indigo-900' : 'text-slate-800'}`}>{thread.sender}</h4>
                  <span className="text-xs text-slate-400">{thread.date}</span>
                </div>
                <p className="text-sm font-medium text-slate-800 mb-1">{thread.subject}</p>
                <p className="text-xs text-slate-500 line-clamp-1">{thread.preview}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Reading Pane & AI Context */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Active Thread */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Q4 Roadmap Planning</h2>
                  <p className="text-sm text-slate-500 mt-1">From: Sarah Jenkins &lt;sarah.j@technova.com&gt;</p>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Email Auth</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-sm max-w-none text-slate-700">
                <p>Hi there,</p>
                <p>Are we still on track to finalize the roadmap by next Tuesday? I need to present the high-level themes to the board on Thursday.</p>
                <p>Also, let me know when you have time for a quick 15-minute sync tomorrow to review the resource allocation.</p>
                <p>Best,<br/>Sarah</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 flex gap-2">
                <Button variant="outline" className="text-slate-600" onClick={() => setDraftOpen(true)}>
                  <Bot className="w-4 h-4 mr-2 text-indigo-500" /> AI Reply
                </Button>
                <Button variant="outline" className="text-slate-600">
                  <MessageSquare className="w-4 h-4 mr-2" /> Manual Reply
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Extraction Panel */}
          <Card className="border-emerald-100 bg-emerald-50/30 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> AI Action Extraction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-emerald-100 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Finalize Q4 Roadmap</p>
                    <p className="text-xs text-slate-500">Suggested Deadline: Next Tuesday</p>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 border-emerald-200 text-emerald-700 hover:bg-emerald-50">Create Task</Button>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-100 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">15-min Sync with Sarah</p>
                    <p className="text-xs text-slate-500">Suggested: Tomorrow</p>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 border-emerald-200 text-emerald-700 hover:bg-emerald-50">Find Time</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Draft Confirmation Modal (Mock) */}
          {draftOpen && (
            <Card className="border-indigo-200 shadow-lg border-2 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-lg"></div>
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" /> Action Confirmation
                  </CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400" onClick={() => setDraftOpen(false)}>
                    <XCircle className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">The AI has prepared a draft. The system will NOT send this without your explicit approval.</p>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="bg-slate-100 rounded p-3 text-sm font-mono text-slate-700">
                  <p><strong>To:</strong> sarah.j@technova.com</p>
                  <p><strong>Subject:</strong> Re: Q4 Roadmap Planning</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-4 text-sm text-slate-800 bg-white">
                  <p>Hi Sarah,</p>
                  <p className="mt-2">Yes, we are on track to finalize the roadmap by Tuesday. I'll send you the draft on Monday evening so you have time to review before Thursday's board meeting.</p>
                  <p className="mt-2">I am available for a quick sync tomorrow at 11:00 AM or 2:00 PM. Let me know which works better for you.</p>
                  <p className="mt-2">Best,<br/>[User]</p>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 border-t border-slate-100 p-4 flex justify-end gap-3">
                <Button variant="outline" className="text-slate-600" onClick={() => setDraftOpen(false)}>Edit Draft</Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Send className="w-4 h-4 mr-2" /> Confirm & Send
                </Button>
              </CardFooter>
            </Card>
          )}

        </div>

      </div>
    </div>
  );
}
