"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldAlert, Users, Phone, Settings, BellRing, MapPin, ExternalLink, Activity, PhoneCall, HeartPulse, FileText, WifiOff } from "lucide-react";
import { useUserPreferences } from "@/lib/UserPreferencesContext";
import { COUNTRY_DATA } from "@/lib/countryData";

export default function EmergencyPage() {
  const { preferences, setCountry } = useUserPreferences();
  
  const contacts = [
    { id: 1, name: "Jane Doe", relationship: "Sister", phone: "+1 (555) 019-2834" },
    { id: 2, name: "Dr. Smith", relationship: "Primary Care", phone: "+1 (555) 992-1122" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-red-500" /> Crisis & Emergency Center
          </h1>
          <p className="text-slate-500 text-sm mt-1">Fast access to help, contacts, and medical profiles.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
          <WifiOff className="w-3.5 h-3.5" /> Offline Capable
        </div>
      </div>

      {/* Primary Actions (Massive Hit Areas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button className="h-24 bg-red-600 hover:bg-red-700 text-xl font-black shadow-lg">
          <PhoneCall className="w-8 h-8 mr-3" /> CALL {preferences.emergencyNumber} ({COUNTRY_DATA[preferences.countryCode]?.name})
        </Button>
        <Button className="h-24 bg-rose-600 hover:bg-rose-700 text-xl font-black shadow-lg">
           Show Medical Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Emergency Contacts */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center bg-slate-50/50">
            <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" /> Trusted Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {contacts.map(c => (
                <div key={c.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-bold text-slate-900 text-base">{c.name}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{c.relationship}</p>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 h-10 w-10 sm:w-auto sm:px-4 rounded-full sm:rounded-md p-0">
                    <Phone className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline font-bold">Call</span>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Local Emergency Services */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" /> Local Services
              </CardTitle>
              <select 
                value={preferences.countryCode} 
                onChange={(e) => setCountry(e.target.value)}
                className="text-xs bg-white border border-slate-200 rounded px-2 py-1 font-semibold text-slate-700 focus:outline-none focus:border-amber-400"
              >
                {Object.entries(COUNTRY_DATA).map(([code, data]) => (
                  <option key={code} value={code}>{data.name}</option>
                ))}
              </select>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
             <div className="bg-amber-50 rounded-lg border border-amber-100 p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">Ambulance</h4>
                  <p className="text-xs text-amber-700 mt-1">Medical emergencies</p>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 h-10 px-6 font-black text-lg">
                  {preferences.emergencyNumber}
                </Button>
             </div>
             
             <div className="flex gap-2">
               <Button variant="outline" className="flex-1 border-slate-200 text-slate-700">Poison Control</Button>
               <Button variant="outline" className="flex-1 border-slate-200 text-slate-700">Crisis Hotline</Button>
             </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
