"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Check, Trash2, Calendar, CheckCircle2, Target, Sparkles, Circle } from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Reminder: Team Standup", time: "10 mins ago", type: "reminder", read: false },
    { id: 2, title: "AI Suggestion: You have 3 overdue tasks.", time: "1 hour ago", type: "ai_suggestion", read: false },
    { id: 3, title: "Goal Milestone Achieved: Python Basics", time: "Yesterday", type: "goal", read: true },
    { id: 4, title: "System: Welcome to Universal AI", time: "Aug 29", type: "system", read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'reminder': return <Calendar className="w-5 h-5 text-orange-500" />;
      case 'task': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'goal': return <Target className="w-5 h-5 text-indigo-500" />;
      case 'ai_suggestion': return <Sparkles className="w-5 h-5 text-blue-500" />;
      default: return <Bell className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-6 h-6 text-slate-800" /> Notifications
          </h1>
          <p className="text-slate-500 text-sm mt-1">You have {unreadCount} unread messages.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={markAllRead} disabled={unreadCount === 0}>
            <Check className="w-4 h-4 mr-2" /> Mark all as read
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {notifications.map(n => (
            <div key={n.id} className={`p-4 flex items-start gap-4 transition-colors ${n.read ? 'bg-white opacity-70' : 'bg-blue-50/30'}`}>
              <div className="mt-1 bg-white p-2 border border-slate-100 rounded-full shadow-sm">
                {getIcon(n.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className={`text-sm ${n.read ? 'text-slate-600' : 'text-slate-900 font-semibold'}`}>{n.title}</p>
                  <span className="text-xs text-slate-400 whitespace-nowrap ml-4">{n.time}</span>
                </div>
                {!n.read && (
                  <div className="mt-2">
                    <Button variant="secondary" size="sm" className="h-7 text-xs bg-white border border-slate-200">
                      View details
                    </Button>
                  </div>
                )}
              </div>
              {!n.read && (
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
          {notifications.length === 0 && (
             <div className="p-8 text-center text-slate-500 text-sm flex flex-col items-center">
               <Bell className="w-12 h-12 text-slate-300 mb-3" />
               You're all caught up!
             </div>
          )}
        </div>
      </div>

    </div>
  );
}
