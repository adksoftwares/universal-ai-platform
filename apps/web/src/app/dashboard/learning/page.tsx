"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Sparkles, BrainCircuit, PencilRuler, CheckCircle2, XCircle, FileText, CalendarDays, Library, Users } from "lucide-react";
import { useState } from "react";

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("tutor");

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-fuchsia-600" /> Education & Learning Center
          </h1>
          <p className="text-slate-500 text-sm mt-1">AI-assisted tutoring, spaced repetition, and academic organization.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("tutor")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'tutor' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          AI Tutor (Socratic)
        </button>
        <button 
          onClick={() => setActiveTab("mistakes")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'mistakes' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Mistake Book
        </button>
        <button 
          onClick={() => setActiveTab("study")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'study' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Study & Exams
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {activeTab === "tutor" && (
          <div className="md:col-span-3">
             <Card className="border-slate-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50 flex flex-row justify-between items-center">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <BrainCircuit className="w-5 h-5 text-fuchsia-500" /> AI Socratic Tutor
                   </CardTitle>
                   <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-1 border border-slate-200 rounded">MATH VERIFICATION: ACTIVE</span>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                   <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/30">
                      
                      <div className="flex justify-end">
                         <div className="bg-slate-800 text-white rounded-lg p-3 text-sm max-w-[80%]">
                            I don't understand how to calculate the derivative of f(x) = sin(x^2).
                         </div>
                      </div>
                      
                      <div className="flex justify-start">
                         <div className="bg-white border border-fuchsia-100 shadow-sm rounded-lg p-4 text-sm max-w-[80%] text-slate-800">
                            <p className="mb-3">Let's work through this step-by-step!</p>
                            <p className="mb-3">Since we have a function inside another function (the <code className="bg-slate-100 text-rose-600 px-1 rounded">x^2</code> is inside the <code className="bg-slate-100 text-blue-600 px-1 rounded">sin</code>), which differentiation rule do you think we should apply here?</p>
                            
                            <div className="bg-fuchsia-50 text-fuchsia-800 p-2 rounded text-xs mt-3 flex items-start gap-2">
                               <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                               <span><strong>Socratic Mode Active:</strong> Guiding questions to help you arrive at the answer independently.</span>
                            </div>
                         </div>
                      </div>

                   </div>
                   <div className="p-4 border-t border-slate-100 bg-white">
                      <div className="flex gap-2">
                        <input type="text" placeholder="E.g. The Chain Rule?" className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                        <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Reply</Button>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>
        )}

        {activeTab === "mistakes" && (
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <PencilRuler className="w-5 h-5 text-amber-500" /> My Mistake Book
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-slate-100">
                      
                      <div className="p-4 space-y-3">
                         <div className="flex justify-between items-start">
                            <p className="text-sm font-semibold text-slate-900">What is the capital of Australia?</p>
                            <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-bold uppercase">Geography</span>
                         </div>
                         
                         <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-rose-50 border border-rose-100 p-2 rounded flex flex-col">
                               <span className="text-rose-600 font-bold mb-1 flex items-center gap-1"><XCircle className="w-3 h-3"/> My Answer</span>
                               <span className="text-slate-800 font-medium">Sydney</span>
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-2 rounded flex flex-col">
                               <span className="text-emerald-700 font-bold mb-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Correct</span>
                               <span className="text-slate-800 font-medium">Canberra</span>
                            </div>
                         </div>
                         
                         <div className="bg-slate-50 text-slate-600 text-xs p-2 rounded italic">
                            Sydney is the largest city, but Canberra was built specifically to be the capital.
                         </div>
                      </div>

                   </div>
                </CardContent>
             </Card>

             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <BookOpen className="w-5 h-5 text-sky-500" /> Active Recall Flashcards
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-4">
                   <p className="text-4xl font-black text-slate-800">12</p>
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Mistakes Due for Review</p>
                   <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Start Spaced Repetition Session</Button>
                </CardContent>
             </Card>
          </div>
        )}

        {activeTab === "study" && (
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <CalendarDays className="w-5 h-5 text-indigo-500" /> Study Plan
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-slate-100">
                      <div className="p-4 hover:bg-slate-50 flex justify-between items-center">
                         <div>
                            <p className="text-sm font-semibold text-slate-800">Calculus Midterm Review</p>
                            <p className="text-xs text-slate-500">60 mins • Today @ 4:00 PM</p>
                         </div>
                         <Button size="sm" variant="outline">Start Session</Button>
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-emerald-500" /> Document-to-Course
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                   <p className="text-sm text-slate-600">Upload your PDF syllabus or lecture slides. The AI will convert it into topics, generate flashcards, and schedule a study plan.</p>
                   <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Upload Material</Button>
                </CardContent>
             </Card>
          </div>
        )}

        {/* Phase 31: Research and Peer Learning (Added to bottom) */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
           <Card className="border-indigo-200 shadow-sm bg-indigo-50/30">
              <CardHeader className="pb-3 border-b border-indigo-100 bg-white">
                 <CardTitle className="text-base font-bold text-indigo-900 flex items-center gap-2">
                   <Library className="w-5 h-5 text-indigo-600" /> AI Research Assistant
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                 <p className="text-sm text-slate-700">Extract methods, generate citations, and summarize research papers securely. All generated citations map to verifiable metadata.</p>
                 <div className="bg-white p-3 border border-indigo-100 rounded text-xs font-mono text-slate-600">
                   [Auto-generated APA Citation]<br/>
                   Doe, J. (2026). Artificial Intelligence in Education. Journal of Learning, 45(2), 112-125.
                 </div>
                 <Button variant="outline" className="w-full text-indigo-700 border-indigo-200 hover:bg-indigo-50">Open Knowledge Library</Button>
              </CardContent>
           </Card>

           <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                 <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                   <Users className="w-5 h-5 text-teal-600" /> Peer Study Groups
                 </CardTitle>
                 <span className="text-[10px] font-bold bg-teal-100 text-teal-700 px-2 py-0.5 rounded uppercase">Isolated</span>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                 <p className="text-sm text-slate-600">Collaborate with peers. Private student data is completely firewalled and never exposed to other group members.</p>
                 <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-sm font-semibold text-slate-800">Advanced Calculus 101</span>
                    <Button size="sm" variant="outline" className="h-7 text-xs">Join Session</Button>
                 </div>
              </CardContent>
           </Card>
        </div>

      </div>
    </div>
  );
}
