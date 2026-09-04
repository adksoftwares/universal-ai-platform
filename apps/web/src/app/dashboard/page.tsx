"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Calendar, Target, CheckCircle2, Mic, Paperclip, BookOpen } from "lucide-react";
import Link from "next/link";

export default function EnhancedDashboardPage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get first name only for the greeting
        const firstName = user.displayName?.split(" ")[0] || user.email?.split("@")[0] || "there";
        setUserName(firstName);
      }
    });
    return unsub;
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header & Greeting */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {getGreeting()}{userName ? `, ${userName}` : ""}.
          </h1>
          <p className="text-slate-500 mt-1">Here is what's happening today, {today}.</p>
        </div>
      </header>

      {/* Main AI Entry */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
        <Card className="relative border-slate-200/60 shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md">
          <CardContent className="p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 text-center">
              How can I help you today?
            </h2>
            
            <div className="relative max-w-3xl mx-auto w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Sparkles className="h-5 w-5 text-blue-500" />
              </div>
              <Input 
                type="text" 
                placeholder="Ask anything, or give me a task..." 
                className="pl-11 pr-24 py-6 text-base md:text-lg rounded-2xl shadow-sm border-slate-300 focus-visible:ring-blue-500 transition-all bg-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    alert(`AI Assistant: Analyzing your request "${e.currentTarget.value}"... (Simulated Action)`);
                    e.currentTarget.value = "";
                  }
                }}
              />
              <div className="absolute inset-y-0 right-2 flex items-center gap-1">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-10 w-10 rounded-full">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-10 w-10 rounded-full">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button size="sm" className="h-10 rounded-xl px-4 bg-blue-600 hover:bg-blue-700" onClick={(e) => {
                  const input = e.currentTarget.parentElement?.parentElement?.querySelector('input');
                  alert(`AI Assistant: Processing "${input?.value || 'empty request'}"... (Simulated Action)`);
                  if (input) input.value = "";
                }}>
                  Send
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto w-full">
              <QuickActionBadge label="Plan my day" />
              <QuickActionBadge label="Explain a concept" />
              <QuickActionBadge label="Create a task" />
              <QuickActionBadge label="Help me study" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Personalization Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        
        {/* Today's Tasks */}
        <Card className="border-slate-200 shadow-sm rounded-2xl">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Today's Tasks
              </h3>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">3 Pending</span>
            </div>
            <ul className="space-y-3">
              <TaskItem title="Review Q3 Report" priority="High" />
              <TaskItem title="Submit expense receipts" priority="Medium" />
              <TaskItem title="Call dentist for appointment" priority="Low" />
            </ul>
          </CardContent>
        </Card>

        {/* Upcoming Reminders */}
        <Card className="border-slate-200 shadow-sm rounded-2xl">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-slate-800">
                <Calendar className="h-5 w-5 text-orange-500" /> Upcoming Reminders
              </h3>
            </div>
            <ul className="space-y-3">
              <ReminderItem title="Team Standup" time="10:00 AM" />
              <ReminderItem title="Water plants" time="5:00 PM" />
            </ul>
          </CardContent>
        </Card>

        {/* Today's Learning */}
        <Card className="border-slate-200 shadow-sm rounded-2xl md:col-span-2 lg:col-span-1">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-slate-800">
                <BookOpen className="h-5 w-5 text-indigo-500" /> Today's Learning
              </h3>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
              <p className="text-sm font-semibold text-indigo-900 mb-1">Python Functions</p>
              <p className="text-xs text-indigo-700/80 mb-3">Est. 30 mins remaining</p>
              <Link href="/dashboard/learning">
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 h-8 text-xs">
                  Resume Study
                </Button>
              </Link>
            </div>
            <div className="flex justify-between items-center pt-2">
               <span className="text-xs font-medium text-slate-500">Career Goal</span>
               <span className="text-xs font-semibold text-blue-600">Senior Dev</span>
            </div>
          </CardContent>
        </Card>

        {/* Home & Family Snippet */}
        <Card className="border-slate-200 shadow-sm rounded-2xl md:col-span-2 lg:col-span-1">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-slate-800">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home & Finance
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl border border-rose-100 bg-rose-50 flex justify-between items-center">
                 <span className="text-sm font-medium text-rose-800">Electricity Bill</span>
                 <span className="text-xs font-bold text-rose-600">Due Tomorrow</span>
              </div>
              <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50 flex justify-between items-center">
                 <span className="text-sm font-medium text-emerald-800">Front Door</span>
                 <span className="text-xs font-bold text-emerald-600">Locked</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

function QuickActionBadge({ label }: { label: string }) {
  return (
    <button 
      className="text-xs md:text-sm font-medium bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
      onClick={() => alert(`AI Assistant: Initiating workflow for "${label}"...`)}
    >
      {label}
    </button>
  );
}

function TaskItem({ title, priority }: { title: string, priority: string }) {
  const priorityColor = priority === 'High' ? 'text-red-500' : priority === 'Medium' ? 'text-orange-500' : 'text-slate-400';
  return (
    <li className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors group cursor-pointer">
      <div className="mt-0.5 w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-blue-500 transition-colors" />
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-700">{title}</p>
      </div>
      <div className={`text-xs font-semibold ${priorityColor}`}>{priority}</div>
    </li>
  );
}

function ReminderItem({ title, time }: { title: string, time: string }) {
  return (
    <li className="flex items-start justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">{time}</span>
    </li>
  );
}
