"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, Plus, CalendarHeart, Gift, MapPin, MoreVertical, Heart, UserPlus, Clock, Settings, Users2, Info } from "lucide-react";
import { useState } from "react";

export default function SocialFamilyPage() {
  const [activeTab, setActiveTab] = useState("groups");

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500" /> Family & Social Life
          </h1>
          <p className="text-slate-500 text-sm mt-1">Organize shared events, manage groups, and track important dates securely.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
           <Button variant="outline" className="bg-white border-slate-200 text-slate-700 w-full sm:w-auto">
             <Search className="w-4 h-4 mr-2" /> Global Search
           </Button>
           <Button className="bg-rose-600 hover:bg-rose-700 w-full sm:w-auto">
             <Plus className="w-4 h-4 mr-1 sm:mr-2" /> New Group
           </Button>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-start gap-3">
        <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-700">
          <strong>Privacy Boundaries:</strong> Information in shared groups is only visible to explicitly added members. Personal relationship notes and gift planning remain strictly private to you unless manually shared.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("groups")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'groups' ? 'border-rose-600 text-rose-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Shared Groups
        </button>
        <button 
          onClick={() => setActiveTab("events")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'events' ? 'border-rose-600 text-rose-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Important Dates & Events
        </button>
        <button 
          onClick={() => setActiveTab("planning")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'planning' ? 'border-rose-600 text-rose-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Gift Planning
        </button>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {activeTab === "groups" && (
          <>
            <div className="lg:col-span-2 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-rose-200 shadow-sm border-2 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3">
                     <Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                   </div>
                   <CardContent className="p-5 flex flex-col gap-3">
                     <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                       <Users className="w-6 h-6 text-rose-600" />
                     </div>
                     <div>
                       <h3 className="font-bold text-slate-800 text-lg">Immediate Family</h3>
                       <p className="text-xs text-slate-500">4 members • Shared Household</p>
                     </div>
                     <div className="mt-2 flex gap-2">
                       <Button size="sm" variant="outline" className="flex-1 text-xs">Shared Tasks</Button>
                       <Button size="sm" className="flex-1 bg-rose-600 text-xs">Family Calendar</Button>
                     </div>
                   </CardContent>
                </Card>
                
                <Card className="border-slate-200 shadow-sm hover:border-slate-300 transition-colors relative">
                   <div className="absolute top-0 right-0 p-3">
                     <Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                   </div>
                   <CardContent className="p-5 flex flex-col gap-3">
                     <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                       <Users2 className="w-6 h-6 text-indigo-600" />
                     </div>
                     <div>
                       <h3 className="font-bold text-slate-800 text-lg">College Friends</h3>
                       <p className="text-xs text-slate-500">6 members • Travel Group</p>
                     </div>
                     <div className="mt-2 flex gap-2">
                       <Button size="sm" variant="outline" className="w-full text-xs">View Itinerary</Button>
                     </div>
                   </CardContent>
                </Card>
              </div>

            </div>

            <div className="space-y-6">
              <Card className="border-rose-100 bg-rose-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold text-rose-800 flex items-center gap-2">
                    <UserPlus className="w-4 h-4" /> AI Relationship Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-rose-900/80 leading-relaxed">
                    You have an upcoming event (Mom's Birthday). Based on your shared lists, you still need to assign someone to pick up the cake.
                  </p>
                  <Button size="sm" variant="outline" className="w-full bg-white border-rose-200 text-rose-700 hover:bg-rose-100">
                    Review Pending Tasks
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "events" && (
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50 flex flex-row justify-between items-center">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                   <CalendarHeart className="w-4 h-4 text-rose-500" /> Upcoming Social Events & Important Dates
                </CardTitle>
                <Button size="sm" className="bg-rose-600 hover:bg-rose-700 h-8">New Event</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <div className="bg-slate-100 text-center rounded p-2 min-w-[60px]">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Oct</p>
                        <p className="text-lg font-black text-slate-800">12</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Mom's 60th Birthday Dinner</h4>
                        <p className="text-xs text-slate-600 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> The Rustic Grill • Immediate Family
                        </p>
                      </div>
                    </div>
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full border border-rose-200">2 RSVPs Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {activeTab === "planning" && (
          <div className="lg:col-span-3">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <Gift className="w-5 h-5 text-indigo-500" /> Private Gift Planning
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-slate-100">
                     <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                        <div>
                           <p className="text-sm font-bold text-slate-800">For: Dad</p>
                           <p className="text-xs text-slate-600 mt-1">Occasion: Father's Day</p>
                           <p className="text-xs text-slate-500 italic mt-1 max-w-md">Idea: Noise-canceling headphones (Budget: $150)</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100">Find via Shopping Center</Button>
                     </div>
                   </div>
                </CardContent>
             </Card>
          </div>
        )}

      </div>
    </div>
  );
}
