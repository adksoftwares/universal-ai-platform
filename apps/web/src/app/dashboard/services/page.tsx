"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Plug, Settings2, ShieldCheck, Check, Search, Calendar, Map } from "lucide-react";

export default function ServicesPage() {
  const integrations = [
    { id: 1, name: "Google Calendar", provider: "calendar", status: "connected", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 2, name: "Maps Provider", provider: "maps", status: "disconnected", icon: Map, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Plug className="w-6 h-6 text-slate-700" /> Integration Hub
          </h1>
          <p className="text-slate-500 text-sm mt-1">Manage external service connections and permissions securely.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Service Discovery Search */}
        <div className="md:col-span-3">
          <Card className="border-slate-200 shadow-sm bg-slate-50/50">
            <CardContent className="p-6">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-semibold text-slate-800 text-lg mb-2">Universal Service Discovery</h3>
                <p className="text-sm text-slate-500 mb-6">Search for nearby healthcare, government services, or transportation based on your connected integrations.</p>
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="E.g., Find a nearby dentist..." 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-400 outline-none shadow-sm"
                  />
                  <Button className="absolute right-2 top-1.5 bottom-1.5 h-auto bg-slate-800 hover:bg-slate-900">
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integrations Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {integrations.map(service => (
            <Card key={service.id} className={`border-slate-200 shadow-sm ${service.status === 'connected' ? 'ring-1 ring-slate-900/5' : ''}`}>
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bg}`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{service.name}</h4>
                      <p className="text-xs text-slate-500">Universal Adapter</p>
                    </div>
                  </div>
                  {service.status === 'connected' ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <ShieldCheck className="w-3.5 h-3.5" /> Connected
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                      Disconnected
                    </span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex gap-2">
                  {service.status === 'connected' ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 text-slate-600">
                        <Settings2 className="w-4 h-4 mr-2" /> Permissions
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-red-600 border-red-100 hover:bg-red-50">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button variant="default" size="sm" className="w-full bg-slate-800 hover:bg-slate-900">
                      Connect Service
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
        </div>

      </div>
    </div>
  );
}
