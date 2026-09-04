"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, Video, FileText, CheckSquare, Plus, ChevronRight, Zap, Users } from "lucide-react";

export default function MeetingsPage() {
  const upcoming = [
    { title: "Weekly Sync: Engineering", time: "10:00 AM - 11:00 AM", attendees: 4, type: "Video" },
    { title: "1:1 with David", time: "2:00 PM - 2:30 PM", attendees: 2, type: "Video" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-indigo-500" /> Meetings & Scheduling
          </h1>
          <p className="text-slate-500 text-sm mt-1">Prepare for meetings, extract notes, and organize your schedule securely.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
           <Button variant="outline" className="flex-1 sm:flex-none border-slate-200 bg-white text-slate-700">
             <Clock className="w-4 h-4 mr-2" /> Find Time
           </Button>
           <Button className="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-700">
             <Plus className="w-4 h-4 mr-2" /> New Meeting
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Agenda & Scheduling */}
        <div className="lg:col-span-1 space-y-6">
          
          <Card className="border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center">
               <h3 className="font-bold text-slate-800">Today's Agenda</h3>
               <span className="text-xs font-medium text-slate-500">Oct 22, 2027</span>
             </div>
             <div className="p-0 divide-y divide-slate-100 bg-white">
               {upcoming.map((mtg, i) => (
                 <div key={i} className="p-4 hover:bg-slate-50 transition-colors border-l-2 border-transparent hover:border-indigo-500 cursor-pointer">
                   <p className="text-xs font-bold text-indigo-600 mb-1">{mtg.time}</p>
                   <h4 className="font-semibold text-slate-900">{mtg.title}</h4>
                   <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                     <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {mtg.attendees}</span>
                     <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" /> {mtg.type}</span>
                   </div>
                 </div>
               ))}
               <div className="p-4 text-center">
                 <Button variant="ghost" size="sm" className="text-slate-500 text-xs">View Full Calendar</Button>
               </div>
             </div>
          </Card>

          {/* AI Scheduling Assistant */}
          <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" /> Scheduling Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-600 mb-3">Ask the AI to find open slots based on your authorized calendar and preferences.</p>
              <div className="bg-white border border-blue-100 rounded-md p-3 text-sm text-slate-800 shadow-sm mb-3">
                 "Find a 30-minute slot with Sarah tomorrow afternoon."
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">Propose Times</Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Meeting Prep & Notes */}
        <div className="lg:col-span-2 space-y-6">
          
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 flex flex-row justify-between items-center bg-slate-50/50">
              <div>
                <CardTitle className="text-lg text-slate-900">Weekly Sync: Engineering</CardTitle>
                <p className="text-xs text-slate-500 mt-1">Today, 10:00 AM - 11:00 AM</p>
              </div>
              <Button variant="outline" size="sm" className="text-slate-600">Join Video</Button>
            </CardHeader>
            <CardContent className="p-0">
              
              {/* Meeting Briefing */}
              <div className="p-5 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" /> AI Meeting Briefing
                </h3>
                <div className="bg-emerald-50/50 rounded-lg p-4 text-sm text-slate-700 space-y-2 border border-emerald-100">
                  <p><strong>Goal:</strong> Review sprint progress and address webhook latency issues.</p>
                  <p><strong>Context:</strong> David reported API issues yesterday via email.</p>
                  <p><strong>Open Tasks:</strong> You have 1 incomplete task related to this project (Update documentation).</p>
                </div>
              </div>

              {/* Notes Workspace */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-slate-800">Meeting Notes</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-slate-500 h-8">Upload Transcript</Button>
                    <Button size="sm" className="bg-slate-900 text-white h-8">Save Notes</Button>
                  </div>
                </div>
                <textarea 
                  className="w-full h-40 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono resize-none"
                  placeholder="Type notes here..."
                  defaultValue="1. Reviewed sprint velocity. Looks good.&#10;2. Webhook issue is caused by database locks.&#10;3. DECISION: We will migrate to async queues for webhooks.&#10;4. ACTION: David to write migration plan by Friday."
                ></textarea>
              </div>

            </CardContent>
          </Card>

          {/* Action Extraction */}
          <Card className="border-indigo-100 bg-indigo-50/30 shadow-sm">
             <div className="p-4 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <CheckSquare className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Action Items Detected</h4>
                    <p className="text-sm text-slate-500">The AI found 1 task assigned to you in the notes.</p>
                  </div>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">Review Actions <ChevronRight className="w-4 h-4 ml-1" /></Button>
             </div>
          </Card>

        </div>

      </div>
    </div>
  );
}
