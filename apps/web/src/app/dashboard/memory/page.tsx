"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Trash2, Edit2, ShieldAlert } from "lucide-react";

export default function MemoryPage() {
  const memories = [
    { id: 1, content: "User prefers concise answers", category: "Preference", date: "Aug 20, 2026" },
    { id: 2, content: "Works as a Software Engineer", category: "Fact", date: "Aug 25, 2026" },
    { id: 3, content: "Learning Python currently", category: "Goal", date: "Aug 28, 2026" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-500" /> My Memory
          </h1>
          <p className="text-slate-500 text-sm mt-1">Information the AI has saved to assist you better.</p>
        </div>
        <Button variant="destructive" className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:text-red-700">
          Clear All Memories
        </Button>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm text-blue-800 leading-relaxed">
        <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong>Privacy First:</strong> Your AI assistant only remembers information you explicitly allow. 
          You have full control to edit or delete any stored context here. This data is never shared.
        </p>
      </div>

      <div className="grid gap-4 mt-6">
        {memories.map(memory => (
          <Card key={memory.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800">{memory.content}</p>
                <div className="flex gap-3 mt-1.5 text-xs">
                  <span className="text-slate-500 font-medium">{memory.category}</span>
                  <span className="text-slate-400">• {memory.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}
