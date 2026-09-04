"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2, ExternalLink, ShieldCheck, FileText, CheckCircle2, Circle, AlertTriangle, ListChecks, CalendarClock, CreditCard } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const params = useParams();
  
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      
      {/* Navigation */}
      <Link href="/dashboard/citizen" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
      </Link>

      {/* Header Card */}
      <Card className="border-indigo-100 shadow-sm overflow-hidden">
        <div className="bg-indigo-50/50 p-6 border-b border-indigo-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">Identity</span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                 <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Source Verified Today
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Passport Renewal</h1>
            <p className="text-slate-600 mt-1 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> U.S. Department of State (National)
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <Button variant="outline" className="flex-1 md:flex-none border-indigo-200 text-indigo-700 hover:bg-indigo-50">
               Save Service
             </Button>
             <Button className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700">
               Visit Official Portal <ExternalLink className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-indigo-100 bg-white">
           <div className="p-4 flex flex-col items-center text-center">
              <CalendarClock className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-medium text-slate-500">Processing Time</span>
              <span className="font-semibold text-slate-800">4-6 Weeks</span>
           </div>
           <div className="p-4 flex flex-col items-center text-center">
              <CreditCard className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-medium text-slate-500">Estimated Fees</span>
              <span className="font-semibold text-slate-800">$130.00 USD</span>
           </div>
           <div className="p-4 flex flex-col items-center text-center">
              <FileText className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-medium text-slate-500">Documents</span>
              <span className="font-semibold text-slate-800">3 Required</span>
           </div>
           <div className="p-4 flex flex-col items-center text-center">
              <ListChecks className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-medium text-slate-500">Application</span>
              <span className="font-semibold text-emerald-600">Online / Mail</span>
           </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="md:col-span-2 space-y-6">
          
          {/* Eligibility */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-lg text-slate-800">Eligibility & Requirements</CardTitle>
            </CardHeader>
            <CardContent className="p-5 text-sm text-slate-600 space-y-4">
              <p>You can renew by mail using Form DS-82 if your most recent passport:</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Is submitted with your application</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Is undamaged (other than normal wear and tear)</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Was issued when you were age 16 or older</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Was issued within the last 15 years</li>
              </ul>
            </CardContent>
          </Card>

          {/* Document Checklist */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
              <CardTitle className="text-lg text-slate-800">Required Documents</CardTitle>
              <Button variant="ghost" size="sm" className="text-indigo-600 h-8">Connect to Vault</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                <div className="p-4 flex items-center gap-3 hover:bg-slate-50">
                   <Circle className="w-5 h-5 text-slate-300" />
                   <div>
                     <p className="font-semibold text-slate-800 text-sm">Most Recent Passport</p>
                     <p className="text-xs text-slate-500">Must be submitted with application.</p>
                   </div>
                </div>
                <div className="p-4 flex items-center gap-3 hover:bg-slate-50">
                   <Circle className="w-5 h-5 text-slate-300" />
                   <div>
                     <p className="font-semibold text-slate-800 text-sm">Passport Photo</p>
                     <p className="text-xs text-slate-500">One color photo, taken within the last 6 months.</p>
                   </div>
                </div>
                <div className="p-4 flex items-center gap-3 hover:bg-slate-50">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                   <div>
                     <p className="font-semibold text-slate-800 text-sm line-through">Form DS-82</p>
                     <p className="text-xs text-emerald-600 font-medium">Completed via official portal.</p>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Col: AI & Actions */}
        <div className="space-y-6">
          <Card className="border-indigo-200 shadow-sm bg-indigo-50/30">
            <CardContent className="p-5 space-y-4">
              <h3 className="font-semibold text-slate-800">Assistance & Tracking</h3>
              <p className="text-sm text-slate-600">The AI can help you create a timeline, set reminders for deadlines, or explain complex terminology in the official requirements.</p>
              
              <div className="space-y-2">
                <Button className="w-full justify-start text-left bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
                  <ListChecks className="w-4 h-4 mr-2 text-indigo-500" /> Create Task List
                </Button>
                <Button className="w-full justify-start text-left bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
                  <CalendarClock className="w-4 h-4 mr-2 text-amber-500" /> Set Deadline Reminder
                </Button>
                <Button className="w-full justify-start text-left bg-slate-900 text-white hover:bg-slate-800 mt-2">
                   Add Reference Tracking
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 flex items-start gap-3">
             <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
             <p><strong>Disclaimer:</strong> This information is a guide based on the official source. The governing authority makes all final decisions regarding eligibility, fees, and processing.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
