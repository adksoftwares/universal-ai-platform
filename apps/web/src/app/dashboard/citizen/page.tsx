"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Search, MapPin, ExternalLink, Clock, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CitizenPage() {
  const [activeTab, setActiveTab] = useState("services");

  const applications = [
    { id: 1, service: "Passport Renewal", ref: "PP-28491-US", status: "processing", date: "Oct 12, 2027" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-indigo-600" /> Civic & Public Services Center
          </h1>
          <p className="text-slate-500 text-sm mt-1">Navigate official government services, track public deadlines, and manage licenses.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-100 text-sm font-medium">
            <MapPin className="w-4 h-4" /> Jurisdiction: National
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-700">
          <strong>Official Source Priority:</strong> Information provided here is sourced from official public authorities. The AI will never automatically pay fees, sign legal declarations, or submit forms on your behalf without your explicit, step-by-step authorization.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("services")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'services' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Service Discovery
        </button>
        <button 
          onClick={() => setActiveTab("tracking")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'tracking' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Applications & Documents
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {activeTab === "services" && (
          <>
            <div className="md:col-span-2 space-y-6">
              <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-indigo-50/50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">What public service do you need?</h3>
                  <div className="relative mb-4">
                    <Search className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="E.g., Renew passport, Register business, Pay tax..." 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
                    />
                    <Button className="absolute right-2 top-1.5 bottom-1.5 h-auto bg-indigo-600 hover:bg-indigo-700">
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Explanation Mock */}
              <Card className="border-indigo-200 shadow-sm border-2">
                <CardHeader className="pb-3 border-b border-indigo-100 bg-indigo-50/30">
                   <CardTitle className="text-sm font-bold text-slate-800 flex justify-between">
                     Passport Renewal
                     <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500"/> Verified Official Source</span>
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                   <div>
                     <p className="text-xs font-bold text-slate-700">Authority:</p>
                     <p className="text-sm text-slate-600">Department of State</p>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-700">Required Documents:</p>
                     <ul className="text-sm text-slate-600 list-disc ml-4 marker:text-indigo-300">
                       <li>Current Passport (Must be undamaged)</li>
                       <li>Form DS-82</li>
                       <li>Passport Photo (Recent within 6 months)</li>
                     </ul>
                   </div>
                   <div className="bg-slate-50 p-3 rounded text-xs text-slate-500 italic">
                     Legal Disclaimer: We cannot make final determinations regarding your eligibility. Please refer to the official authority's website for final verification.
                   </div>
                   <Button className="w-full bg-slate-800 hover:bg-slate-900"><ExternalLink className="w-4 h-4 mr-2"/> Start Application on Official Site</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
                  <CardTitle className="text-base text-slate-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" /> Civic Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    <div className="p-4 hover:bg-slate-50 transition-colors">
                      <p className="font-semibold text-slate-800 text-sm mb-1">State Tax Filing</p>
                      <p className="text-xs text-slate-500">Due in 14 days (Apr 15)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "tracking" && (
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-indigo-500" /> Active Applications & References
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-slate-100">
                      {applications.map(app => (
                        <div key={app.id} className="p-4 hover:bg-slate-50 transition-colors">
                          <p className="font-semibold text-slate-800 text-sm mb-1">{app.service}</p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-500 font-mono">Ref: {app.ref}</span>
                            <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-medium capitalize border border-amber-200">
                              {app.status}
                            </span>
                          </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>

             <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                   <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <Building2 className="w-5 h-5 text-indigo-500" /> Licences & Permits
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-slate-100">
                        <div className="p-4 hover:bg-slate-50 transition-colors">
                          <p className="font-semibold text-slate-800 text-sm mb-1">Driver's Licence</p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-500">Exp: Oct 2030</span>
                            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium capitalize border border-emerald-200">
                              Valid
                            </span>
                          </div>
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
