"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Circle, Clock, MoreHorizontal, Plus } from "lucide-react";

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit expense reports", dueDate: "Today", priority: "High", completed: false },
    { id: 2, title: "Review Q3 Marketing Plan", dueDate: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Call dentist for appointment", dueDate: "Aug 31", priority: "Low", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your day-to-day items.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" /> New Task
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        {['all', 'today', 'upcoming', 'completed'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium capitalize border-b-2 transition-colors ${
              activeTab === tab 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Quick Add */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <Plus className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
        <input 
          type="text" 
          placeholder="Add a new task... (e.g. Buy groceries tomorrow)" 
          className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-sm text-slate-800"
        />
        <Button size="sm" className="bg-slate-100 hover:bg-slate-200 text-slate-700 h-8">Add</Button>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {tasks.filter(t => activeTab === 'all' || (activeTab === 'completed' && t.completed) || (activeTab !== 'completed' && !t.completed)).map(task => (
            <div key={task.id} className="flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors group">
              <button onClick={() => toggleTask(task.id)} className="shrink-0 text-slate-400 hover:text-blue-500 transition-colors">
                {task.completed ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Circle className="w-6 h-6" />}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`flex items-center gap-1 text-xs ${task.dueDate === 'Today' ? 'text-orange-500 font-medium' : 'text-slate-500'}`}>
                    <Clock className="w-3.5 h-3.5" /> {task.dueDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                  task.priority === 'High' ? 'bg-red-50 text-red-600' :
                  task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-600'
                }`}>
                  {task.priority}
                </span>
                <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
             <div className="p-8 text-center text-slate-500 text-sm">
               No tasks found.
             </div>
          )}
        </div>
      </div>

    </div>
  );
}
