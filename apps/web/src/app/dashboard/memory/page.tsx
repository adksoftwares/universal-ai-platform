"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Trash2, Edit2, ShieldAlert, Loader2 } from "lucide-react";
import { ApiClient } from "@/services/api";

type Memory = {
  id: string;
  content: string;
  type: string;
  category?: string;
  createdAt: string;
};

export default function MemoryPage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    try {
      const data = await ApiClient.get<Memory[]>('/memories');
      setMemories(Array.isArray(data) ? data : []);
    } catch (error) {
      setMemories([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteMemory = async (id: string) => {
    try {
      // @ts-ignore
      await ApiClient.fetch(`/memories/${id}`, { method: 'DELETE' });
      setMemories(memories.filter(m => m.id !== id));
    } catch (error) {
      console.error("Failed to delete memory", error);
    }
  };


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

      {loading ? (
        <div className="flex justify-center p-8">
          <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>
      ) : (
        <div className="grid gap-4 mt-6">
          {memories.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No memories saved yet.</p>
          ) : (
            memories.map(memory => (
              <Card key={memory.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{memory.content}</p>
                    <div className="flex gap-3 mt-1.5 text-xs">
                      <span className="text-slate-500 font-medium capitalize">{memory.type} {memory.category && `- ${memory.category}`}</span>
                      <span className="text-slate-400">â€¢ {new Date(memory.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600" onClick={() => deleteMemory(memory.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

    </div>
  );
}
