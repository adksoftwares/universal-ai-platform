"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ShieldAlert, HeartPulse, X, AlertTriangle, ArrowLeft } from "lucide-react";

export default function EmergencyModePage() {
  const [sharingLocation, setSharingLocation] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-red-500 font-bold text-lg tracking-wider">
          <AlertTriangle className="w-6 h-6 animate-pulse" /> EMERGENCY MODE
        </div>
        <Link href="/dashboard">
          <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-6 h-6" />
          </Button>
        </Link>
      </header>

      {/* Main Actions */}
      <main className="flex-1 p-4 flex flex-col items-center justify-center max-w-lg mx-auto w-full gap-4">
        
        <Button className="w-full h-24 text-xl font-bold bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-lg shadow-red-900/20">
          <Phone className="w-8 h-8 mb-1" />
          Call Emergency Services
        </Button>

        <Button 
          onClick={() => setSharingLocation(true)}
          className="w-full h-20 text-lg font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-2xl flex items-center justify-center gap-3 shadow-lg"
        >
          <MapPin className="w-6 h-6" />
          Share My Location
        </Button>

        <Button className="w-full h-20 text-lg font-bold bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 rounded-2xl flex items-center justify-center gap-3">
          <UsersIcon className="w-6 h-6" />
          Contact Emergency Person
        </Button>

        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <Button variant="outline" className="h-20 text-base font-semibold border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white flex flex-col gap-2 rounded-2xl">
            <ShieldAlert className="w-5 h-5" /> Safety Guidance
          </Button>
          <Button variant="outline" className="h-20 text-base font-semibold border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white flex flex-col gap-2 rounded-2xl">
            <HeartPulse className="w-5 h-5" /> Medical Info
          </Button>
        </div>

      </main>

      {/* Location Sharing Modal */}
      {sharingLocation && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex flex-col justify-end p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-lg mx-auto shadow-2xl animate-in slide-in-from-bottom-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="text-blue-500" /> Share Location
            </h3>
            
            <div className="bg-slate-800 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-400 mb-1">Sharing with</p>
              <p className="font-semibold text-white">Jane Doe (Emergency Contact)</p>
              <div className="h-px bg-slate-700 my-3"></div>
              <p className="text-sm text-slate-400 mb-1">Duration</p>
              <p className="font-semibold text-white">1 Hour (Auto-expires)</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setSharingLocation(false)} className="flex-1 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 h-14 rounded-xl text-lg">
                Cancel
              </Button>
              <Button onClick={() => setSharingLocation(false)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl text-lg font-bold">
                Confirm Share
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
