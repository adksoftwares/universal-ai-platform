"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Plus, CheckCircle2, Circle, Sparkles } from "lucide-react";

export default function GoalsPage() {
  const goal = {
    title: "Learn Python",
    description: "Master Python fundamentals and build a real-world web application.",
    progress: 45,
    targetDate: "Dec 31, 2026",
    milestones: [
      { id: 1, title: "Python Fundamentals", completed: true },
      { id: 2, title: "Data Structures & Algorithms", completed: false },
      { id: 3, title: "Web Scraping Project", completed: false },
      { id: 4, title: "Django/Flask Web App", completed: false },
    ]
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Goals</h1>
          <p className="text-slate-500 text-sm mt-1">Plan and achieve your long-term objectives.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" /> New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Goal Card */}
        <Card className="border-slate-200 shadow-sm md:col-span-2">
          <CardHeader className="pb-4 border-b border-slate-100 flex flex-row justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-5 h-5 text-indigo-500" />
                <CardTitle className="text-lg text-slate-800">{goal.title}</CardTitle>
              </div>
              <p className="text-sm text-slate-500">{goal.description}</p>
            </div>
            <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">
              Target: {goal.targetDate}
            </span>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700">Overall Progress</span>
                <span className="text-indigo-600 font-bold">{goal.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-indigo-500 h-3 rounded-full transition-all" style={{ width: `${goal.progress}%` }}></div>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center justify-between">
                Milestones
                <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Adjust Plan with AI
                </Button>
              </h4>
              <div className="space-y-2">
                {goal.milestones.map(m => (
                  <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
                    {m.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-slate-300" />}
                    <span className={`text-sm ${m.completed ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                      {m.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Empty Goal Slot */}
        <button className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-8 text-slate-400 hover:text-indigo-500 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all min-h-[300px]">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-500">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-medium">Create a new goal</span>
          <span className="text-xs mt-2 text-center text-slate-500 px-4">Let AI help you build a step-by-step roadmap.</span>
        </button>

      </div>
    </div>
  );
}
