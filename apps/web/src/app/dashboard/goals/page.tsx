"use client";

import { Button } from "@/components/ui/button";
import { Target, Plus } from "lucide-react";

export default function GoalsPage() {
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

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center p-16 bg-slate-50 border border-slate-200 border-dashed rounded-2xl text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
          <Target className="w-8 h-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-1">No goals yet</h3>
        <p className="text-slate-500 mb-4 max-w-sm">Create your first goal and let AI help you build a step-by-step roadmap to achieve it.</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" /> Create Your First Goal
        </Button>
      </div>

    </div>
  );
}

