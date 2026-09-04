"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Plus, CheckCircle2, Circle, Flame } from "lucide-react";
import { useState, useEffect } from "react";
import { ApiClient } from "@/services/api";

export default function DevelopmentPage() {
  const [habits, setHabits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      setLoading(true);
      const res = await ApiClient.get('/development/habits');
      setHabits(res || []);
    } catch (error) {
      console.error("Failed to fetch habits", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleHabit = async (habit: any) => {
    try {
      const updated = { ...habit, completed: !habit.completed };
      await ApiClient.put(`/development/habits/${habit.id}`, updated);
      setHabits(habits.map(h => h.id === habit.id ? updated : h));
    } catch (error) {
      console.error("Failed to update habit", error);
    }
  };

  const addHabit = async () => {
    const name = prompt("Enter habit name:");
    if (!name) return;
    try {
      const newHabit = await ApiClient.post('/development/habits', {
        name,
        frequency: "Daily",
        completed: false,
        streak: 0
      });
      setHabits([...habits, newHabit]);
    } catch (error) {
      console.error("Failed to create habit", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-500" /> Habits & Development
          </h1>
          <p className="text-slate-500 text-sm mt-1">Simple, measurable personal improvement.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={addHabit}>
          <Plus className="w-4 h-4 mr-2" /> New Habit
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-4 text-center text-slate-500">Loading habits...</div>
        ) : habits.length === 0 ? (
          <div className="p-4 text-center text-slate-500">Integration Required / No habits found</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {habits.map(habit => (
              <div key={habit.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <button onClick={() => toggleHabit(habit)} className="text-slate-400 hover:text-emerald-500 transition-colors">
                    {habit.completed ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Circle className="w-6 h-6" />}
                  </button>
                  <div>
                    <p className={`text-sm font-semibold ${habit.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                      {habit.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{habit.frequency || "Daily"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-md text-xs font-bold">
                  <Flame className="w-3.5 h-3.5" /> {habit.streak || 0}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* AI Development Plan Hook */}
      <Card className="border-slate-200 shadow-sm bg-slate-50 border-dashed">
        <CardContent className="p-8 text-center flex flex-col items-center">
          <Activity className="w-10 h-10 text-slate-400 mb-4" />
          <h3 className="font-semibold text-slate-800 text-lg mb-2">Want to improve a specific soft skill?</h3>
          <p className="text-sm text-slate-500 mb-6 max-w-md">Let AI generate a step-by-step personal development plan for public speaking, time management, or communication.</p>
          <Button variant="outline" className="bg-white" onClick={() => alert('Integration Required')}>Generate Development Plan</Button>
        </CardContent>
      </Card>

    </div>
  );
}
