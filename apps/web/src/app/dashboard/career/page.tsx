"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Bot, FileCheck, CheckCircle2, AlertCircle, LayoutTemplate, MessageSquare, Target } from "lucide-react";
import { useState } from "react";

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-sky-500" /> Professional Life Center
          </h1>
          <p className="text-slate-500 text-sm mt-1">Manage resumes, track job applications, and prepare for interviews.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-200 bg-white text-slate-700">
             <Bot className="w-4 h-4 mr-2" /> Career Coach
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">
             New Application
          </Button>
        </div>
      </div>

      {/* Safety Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">
          <strong>AI Safety Guardrail:</strong> The AI acts as an assistant and will <strong>never</strong> automatically apply to jobs on your behalf, nor will it invent or fabricate skills, degrees, or experiences on your resume. You retain full control over your career decisions and external communications.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("resume")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'resume' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Resumes & Portfolio
        </button>
        <button 
          onClick={() => setActiveTab("jobs")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'jobs' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Job Search & Applications
        </button>
        <button 
          onClick={() => setActiveTab("interviews")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'interviews' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Interviews & Networking
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {activeTab === "resume" && (
          <>
            <div className="lg:col-span-2 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-sky-200 shadow-sm border-2">
                   <CardContent className="p-4 flex flex-col gap-2">
                     <div className="flex justify-between">
                       <FileText className="w-6 h-6 text-sky-500" />
                       <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-0.5 rounded">Active</span>
                     </div>
                     <h3 className="font-bold text-slate-800">Software Engineer CV</h3>
                     <p className="text-xs text-slate-500">Updated 2 days ago</p>
                     <div className="mt-2 flex gap-2">
                       <Button size="sm" variant="outline" className="flex-1 text-xs">Edit</Button>
                       <Button size="sm" className="flex-1 bg-sky-600 text-xs">Tailor</Button>
                     </div>
                   </CardContent>
                </Card>
                <Card className="border-slate-200 shadow-sm hover:border-sky-200 cursor-pointer transition-colors">
                   <CardContent className="p-4 flex flex-col gap-2">
                     <div className="flex justify-between">
                       <FileText className="w-6 h-6 text-slate-400" />
                     </div>
                     <h3 className="font-bold text-slate-800">Product Manager CV</h3>
                     <p className="text-xs text-slate-500">Updated 1 month ago</p>
                   </CardContent>
                </Card>
              </div>

              {/* Portfolio */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                     <LayoutTemplate className="w-4 h-4 text-sky-500" /> Active Portfolio Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    <div className="p-4 hover:bg-slate-50 transition-colors">
                      <h4 className="font-bold text-slate-800 text-sm">Universal E-Commerce Platform</h4>
                      <p className="text-xs text-slate-600 mt-1">Built a scalable platform using Next.js and NestJS handling 10k concurrent users.</p>
                      <div className="mt-2 flex gap-2">
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">React</span>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Node.js</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            <div className="space-y-6">
              <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                    <Target className="w-4 h-4" /> ATS & Match Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    Paste a job description below to compare against your <strong>Software Engineer CV</strong>.
                  </p>
                  <textarea className="w-full text-xs p-2 rounded border border-emerald-200 bg-white" rows={3} placeholder="Paste job description here..."></textarea>
                  <Button size="sm" variant="outline" className="w-full bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-100">
                    Run Analysis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "jobs" && (
          <div className="lg:col-span-3">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                   <FileCheck className="w-4 h-4 text-sky-500" /> Active Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Senior Frontend Engineer</h4>
                      <p className="text-xs text-slate-600 mt-0.5">TechNova Solutions</p>
                    </div>
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded border border-sky-200">Screening</span>
                  </div>
                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Full Stack Developer</h4>
                      <p className="text-xs text-slate-600 mt-0.5">InnovateCorp</p>
                    </div>
                    <span className="bg-fuchsia-100 text-fuchsia-700 text-xs font-bold px-2 py-1 rounded border border-fuchsia-200">Interview</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {activeTab === "interviews" && (
          <div className="lg:col-span-3">
             <Card className="border-fuchsia-200 shadow-sm">
                <CardHeader className="border-b border-slate-100 bg-gradient-to-r from-fuchsia-50 to-white">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <MessageSquare className="w-5 h-5 text-fuchsia-500" /> Interview Prep & Mock Sessions
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-4">
                   <Bot className="w-12 h-12 text-slate-300 mx-auto" />
                   <p className="text-sm text-slate-600 max-w-md mx-auto">
                     Select an active job application to generate role-specific practice questions or start a mock technical interview with the AI.
                   </p>
                   <Button className="bg-fuchsia-600 hover:bg-fuchsia-700">Start Mock Interview</Button>
                </CardContent>
             </Card>
          </div>
        )}

      </div>
    </div>
  );
}
