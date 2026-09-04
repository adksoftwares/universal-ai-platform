"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Search, UserCircle, Activity, FileText, Settings, BookOpen, AlertTriangle, Sparkles, Stethoscope, Users, Pill, Leaf } from "lucide-react";
import { useState } from "react";

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState("wellness");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [steps, setSteps] = useState(6240);

  const logSymptom = () => {
    const newSymptoms = ["Mild Headache", "Fatigue", "Sore Throat"];
    setSymptoms([...symptoms, newSymptoms[symptoms.length % 3]]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-emerald-500" /> Health, Wellness & Personal Care
          </h1>
          <p className="text-slate-500 text-sm mt-1">Organize your health records securely, maintain routines, and understand medical documents.</p>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">
          <strong>Medical Disclaimer:</strong> This system is a personal organization and wellness assistant. It is NOT a doctor, diagnostic authority, or emergency service. Information interpreted by AI can have several possible explanations and should always be verified by a qualified healthcare professional in context.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("wellness")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'wellness' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Daily Wellness & Fitness
        </button>
        <button 
          onClick={() => setActiveTab("records")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'records' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Health Records & Documents
        </button>
        <button 
          onClick={() => setActiveTab("caregivers")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'caregivers' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Caregiver Sharing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {activeTab === "wellness" && (
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <Activity className="w-5 h-5 text-blue-500" /> Activity & Fitness
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                   <div className="space-y-4">
                     <div>
                       <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Today's Progress</p>
                       <div className="flex justify-between items-end">
                         <span className="text-2xl font-black text-slate-800">{steps.toLocaleString()} <span className="text-sm font-medium text-slate-500">steps</span></span>
                         <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">On Track</span>
                       </div>
                     </div>
                     <div className="pt-3 border-t border-slate-100">
                       <Button variant="outline" className="w-full text-xs h-8" onClick={() => setSteps(s => s + 2500)}>Log Workout (+2.5k steps)</Button>
                     </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <Stethoscope className="w-5 h-5 text-rose-500" /> Symptom Tracker
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                   <p className="text-xs text-slate-500 mb-4">Log symptoms privately to share with your provider at your next visit.</p>
                   {symptoms.map((s, idx) => (
                      <div key={idx} className="mb-2 p-2 bg-rose-50 rounded text-sm text-rose-900 border border-rose-100 flex justify-between items-center">
                        <span>{s}</span>
                        <span className="text-xs text-rose-500">Just now</span>
                      </div>
                   ))}
                   <Button size="sm" className="w-full bg-slate-900 text-white hover:bg-slate-800" onClick={logSymptom}>Log New Symptom</Button>
                </CardContent>
             </Card>
          </div>
        )}

        {activeTab === "records" && (
          <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
             
             {/* Timeline */}
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-indigo-500" /> Personal Health Timeline
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="p-4 divide-y divide-slate-100">
                      <div className="py-3 flex gap-3">
                         <div className="w-1 bg-indigo-200 rounded-full"></div>
                         <div>
                           <p className="text-xs text-slate-500 font-bold uppercase">Oct 12</p>
                           <p className="text-sm font-semibold text-slate-800">Annual Physical Checkup</p>
                           <p className="text-xs text-slate-600 mt-1">Dr. Smith • All standard vitals normal.</p>
                         </div>
                      </div>
                      <div className="py-3 flex gap-3">
                         <div className="w-1 bg-emerald-200 rounded-full"></div>
                         <div>
                           <p className="text-xs text-slate-500 font-bold uppercase">Oct 14</p>
                           <p className="text-sm font-semibold text-slate-800">Lab Results: Complete Blood Count</p>
                           <Button variant="link" className="p-0 h-auto text-xs text-indigo-600 font-bold mt-1">View AI Explanation</Button>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>

             {/* Medical AI Explain Modal */}
             <Card className="border-emerald-200 shadow-sm border-2 overflow-hidden bg-gradient-to-br from-emerald-50/30 to-white">
                <CardHeader className="pb-3 border-b border-emerald-100">
                   <CardTitle className="text-base font-bold text-emerald-800 flex items-center gap-2">
                     <Sparkles className="w-5 h-5 text-emerald-500" /> AI Document Explanation
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                   <p className="text-sm text-slate-700">
                     <strong>AI Educational Summary:</strong> The lab report shows your Hemoglobin is 14.5 g/dL, which falls within the standard reference range (13.8 - 17.2 g/dL). 
                   </p>
                   <div className="bg-slate-100 text-slate-600 text-xs p-3 rounded">
                     <strong>Safety Note:</strong> This information can have several possible explanations. A healthcare professional should interpret it in context. The AI cannot diagnose conditions or replace professional medical advice.
                   </div>
                </CardContent>
             </Card>

          </div>
        )}

        {activeTab === "caregivers" && (
          <div className="md:col-span-3 max-w-2xl">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <Users className="w-5 h-5 text-purple-500" /> Secure Caregiver Access
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                   <p className="text-sm text-slate-600">
                     Temporarily share specific health timelines, appointments, or medication schedules with a trusted caregiver. Access is automatically revoked after expiration.
                   </p>
                   
                   <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center bg-white">
                     <div>
                       <p className="text-sm font-bold text-slate-800">Jane Doe (Spouse)</p>
                       <p className="text-xs text-slate-500">Access: Medication List, Upcoming Appointments</p>
                       <p className="text-xs text-rose-500 font-bold mt-1">Expires in 7 days</p>
                     </div>
                     <Button variant="outline" size="sm" className="border-rose-200 text-rose-700 hover:bg-rose-50">Revoke Now</Button>
                   </div>

                   <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Grant Temporary Access</Button>
                </CardContent>
             </Card>
          </div>
        )}

      </div>
    </div>
  );
}
