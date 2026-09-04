"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Calendar as CalendarIcon, 
  Bell, 
  ListTodo, 
  Plus, 
  ArrowRight,
  Sun,
  CalendarDays,
  Sparkles,
  Home,
  ShieldAlert
} from "lucide-react";
import { toast } from "sonner";

export default function MyLifePage() {
  const [isLocked, setIsLocked] = useState(false);

  const handleLock = () => {
    setIsLocked(true);
    toast.success("Door Locked", { description: "Front door has been securely locked." });
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit expense reports", dueDate: "Today", priority: "High", completed: false },
    { id: 2, title: "Review Q3 Marketing Plan", dueDate: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Call dentist for appointment", dueDate: "Aug 31", priority: "Low", completed: true },
    { id: 4, title: "Prepare presentation slides", dueDate: "Today", priority: "High", completed: false },
  ]);

  const [newTaskInput, setNewTaskInput] = useState("");

  const reminders = [
    { id: 1, title: "Team Standup", time: "10:00 AM", date: "Today", recurring: "Daily" },
    { id: 2, title: "Water plants", time: "5:00 PM", date: "Today", recurring: "Every 3 days" },
    { id: 3, title: "Doctor Appointment", time: "2:30 PM", date: "Tomorrow", recurring: "None" },
  ];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTaskInput.trim(),
        dueDate: "Today",
        priority: "Medium",
        completed: false,
      }
    ]);
    setNewTaskInput("");
  };

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <CalendarDays className="w-7 h-7 text-blue-600" /> My Life & Routine
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Organize your daily tasks, reminders, and schedules in one place.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/life/tasks">
            <Button variant="outline" size="sm" className="text-slate-700">
              <ListTodo className="w-4 h-4 mr-2" /> All Tasks
            </Button>
          </Link>
          <Link href="/dashboard/life/reminders">
            <Button variant="outline" size="sm" className="text-slate-700">
              <Bell className="w-4 h-4 mr-2 text-orange-500" /> All Reminders
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Add Task */}
      <form onSubmit={handleAddTask} className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <Plus className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
        <input 
          type="text" 
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
          placeholder="Add a quick task for today... (e.g. Schedule team retro at 4pm)" 
          className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-sm text-slate-800"
        />
        <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 rounded-xl">
          Add Task
        </Button>
      </form>

      {/* Grid: Tasks & Reminders side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tasks Card */}
        <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-slate-50/70 border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <ListTodo className="w-5 h-5 text-blue-600" /> Tasks for Today
              </CardTitle>
              <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                {pendingCount} Pending
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {tasks.slice(0, 5).map(task => (
                <div key={task.id} className="flex items-center gap-3 p-4 hover:bg-slate-50/80 transition-colors">
                  <button onClick={() => toggleTask(task.id)} className="shrink-0 text-slate-400 hover:text-blue-500 transition-colors">
                    {task.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5" />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-xs ${task.dueDate === 'Today' ? 'text-orange-500 font-medium' : 'text-slate-400'}`}>
                        {task.dueDate}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                    task.priority === 'High' ? 'bg-red-50 text-red-600' :
                    task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
              <Link href="/dashboard/life/tasks" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                View all tasks <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Reminders Card */}
        <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-slate-50/70 border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <Bell className="w-5 h-5 text-orange-500" /> Upcoming Reminders
              </CardTitle>
              <Link href="/dashboard/life/reminders">
                <Button variant="ghost" size="sm" className="h-7 text-xs text-orange-600 hover:text-orange-700">
                  <Plus className="w-3.5 h-3.5 mr-1" /> New
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {reminders.map(r => (
                <div key={r.id} className="flex items-center justify-between p-4 hover:bg-slate-50/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">{r.title}</p>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" /> {r.date}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-slate-700">
                          <Clock className="w-3 h-3" /> {r.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                    {r.recurring}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
              <Link href="/dashboard/life/reminders" className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1">
                View all reminders <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Daily Routine Summary & AI Life Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 shadow-sm rounded-2xl bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-slate-50/50">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Life AI Assistant</h3>
                <p className="text-sm text-slate-500">
                  "You have 3 bills due this week and milk needs replenishing. Should I add it to the shared shopping list?"
                </p>
              </div>
            </div>
            <Button variant="outline" className="bg-white border-slate-200 hover:bg-slate-50 text-indigo-700">
              <Sparkles className="w-4 h-4 mr-2" /> Accept
            </Button>
          </CardContent>
        </Card>

        {/* Phase 30 Smart Home & Automations */}
        <Card className="border-emerald-200 shadow-sm rounded-2xl overflow-hidden bg-emerald-50/30">
          <CardHeader className="pb-2 border-b border-emerald-100 bg-white">
            <CardTitle className="text-sm font-semibold text-emerald-800 flex items-center gap-2">
              <Home className="w-4 h-4" /> Home Automations & Devices
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="bg-white border border-emerald-100 rounded-lg p-3 flex justify-between items-center shadow-sm">
               <div>
                 <p className="text-sm font-semibold text-slate-800">Front Door Lock</p>
                 {isLocked ? (
                   <p className="text-xs text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Locked & Secured</p>
                 ) : (
                   <p className="text-xs text-rose-500 flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> Requires explicit authorization</p>
                 )}
               </div>
               {isLocked ? (
                 <Button size="sm" variant="outline" className="h-8 border-emerald-200 text-emerald-700 bg-emerald-50 pointer-events-none">Locked</Button>
               ) : (
                 <Button size="sm" variant="outline" className="h-8 border-rose-200 text-rose-700 hover:bg-rose-50" onClick={handleLock}>Lock Now</Button>
               )}
            </div>
            <p className="text-xs text-slate-500 text-center italic">
              AI cannot control security systems or smart locks without manual confirmation.
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
