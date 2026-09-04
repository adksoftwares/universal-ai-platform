"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Clock, Calendar as CalendarIcon, Repeat, MoreHorizontal, Plus } from "lucide-react";

export default function RemindersPage() {
  const reminders = [
    { id: 1, title: "Team Standup", time: "10:00 AM", date: "Today", recurring: "Daily (Weekdays)", status: "upcoming" },
    { id: 2, title: "Water plants", time: "5:00 PM", date: "Today", recurring: "Every 3 days", status: "upcoming" },
    { id: 3, title: "Renew passport", time: "9:00 AM", date: "Sep 15, 2026", recurring: "None", status: "upcoming" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-6 h-6 text-orange-500" /> Reminders
          </h1>
          <p className="text-slate-500 text-sm mt-1">Never forget what's important.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          <Plus className="w-4 h-4 mr-2" /> New Reminder
        </Button>
      </div>

      <div className="grid gap-4 mt-6">
        {reminders.map(reminder => (
          <Card key={reminder.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-3 h-3 rounded-full bg-orange-400 shrink-0"></div>
                <div>
                  <p className="font-semibold text-slate-800">{reminder.title}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" /> {reminder.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {reminder.time}</span>
                    {reminder.recurring !== "None" && (
                      <span className="flex items-center gap-1 text-blue-600"><Repeat className="w-3.5 h-3.5" /> {reminder.recurring}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Button variant="outline" size="sm" className="h-8 text-xs font-medium text-slate-600">
                  Mark Complete
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
