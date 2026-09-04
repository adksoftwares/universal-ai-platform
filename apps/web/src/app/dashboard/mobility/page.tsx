"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, MapPin, Search, Navigation, AlertCircle, Calendar, Wrench, Battery, Gauge, Map } from "lucide-react";
import { useState } from "react";

export default function MobilityPage() {
  const [activeTab, setActiveTab] = useState("routing");

  const vehicles = [
    { name: "Honda Civic", type: "Car", plate: "ABC-1234", mileage: "45,000 km", fuelType: "Petrol" },
    { name: "City E-Bike", type: "Bicycle", plate: "-", mileage: "250 km", fuelType: "Electric" }
  ];

  const maintenance = [
    { task: "Oil Change", vehicle: "Honda Civic", due: "Dec 15, 2027" },
    { task: "Tire Pressure Check", vehicle: "City E-Bike", due: "Nov 01, 2027" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Car className="w-6 h-6 text-orange-500" /> Mobility & Transport
          </h1>
          <p className="text-slate-500 text-sm mt-1">Manage vehicles, plan routes, and organize your daily commute.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-200 bg-white text-slate-700">
             <Map className="w-4 h-4 mr-2" /> Current Location
          </Button>
        </div>
      </div>

      {/* AI Driving Safety Warning */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-start sm:items-center gap-3">
        <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
        <p className="text-xs text-orange-800">
          <strong>Safety Boundary:</strong> This system provides routing suggestions and vehicle management. It does <strong>not</strong> provide real-time driving instructions or vehicle automation. Please drive safely and do not interact with the screen while moving.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("routing")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'routing' ? 'border-orange-600 text-orange-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Routes & Commute
        </button>
        <button 
          onClick={() => setActiveTab("vehicles")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'vehicles' ? 'border-orange-600 text-orange-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          My Vehicles
        </button>
        <button 
          onClick={() => setActiveTab("maintenance")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'maintenance' ? 'border-orange-600 text-orange-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Maintenance & Fuel
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {activeTab === "routing" && (
          <>
            <div className="lg:col-span-2 space-y-6">
              
              {/* Route Search */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <MapPin className="w-5 h-5 text-slate-400 ml-2" />
                  <input type="text" placeholder="Origin (e.g. Home)" className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 p-2 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-slate-400 ml-2" />
                  <input type="text" placeholder="Destination (e.g. University)" className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 p-2 text-sm" />
                  <Button className="bg-orange-600 hover:bg-orange-700 rounded-lg shrink-0">Find Route</Button>
                </div>
              </div>

              {/* Commute AI Briefing */}
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-sm">
                <CardHeader className="pb-3 border-b border-orange-100">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" /> Commute Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <p className="text-sm text-slate-700">
                    <strong>Next Meeting:</strong> "Dentist Appointment" at 14:00.
                  </p>
                  <p className="text-sm text-slate-700">
                    Based on current traffic APIs (mocked), we recommend leaving by <strong>13:15</strong>. The fastest route is currently via Highway 4.
                  </p>
                  <div className="pt-2 border-t border-orange-100 flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white text-orange-700 border-orange-200 hover:bg-orange-50 flex-1">View Map</Button>
                    <Button variant="outline" size="sm" className="bg-white text-orange-700 border-orange-200 hover:bg-orange-50 flex-1">Set Departure Alarm</Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Public Transport Mock */}
            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm h-full">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Map className="w-4 h-4 text-sky-500" /> Transit Disruptions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-sm text-slate-700 text-center py-10">
                  <AlertCircle className="w-10 h-10 text-slate-200 mx-auto mb-3" />
                  <p>All local transit services are operating normally.</p>
                  <p className="text-xs text-slate-400 mt-2">Data provided by Transit API adapter.</p>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "vehicles" && (
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicles.map((v, i) => (
                <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50 flex flex-row justify-between items-center">
                    <CardTitle className="text-base font-bold text-slate-800">{v.name}</CardTitle>
                    <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{v.type}</span>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500 text-xs">License Plate</p>
                        <p className="font-semibold text-slate-900">{v.plate}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs">Odometer</p>
                        <p className="font-semibold text-slate-900">{v.mileage}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs">Power / Fuel</p>
                        <p className="font-semibold text-slate-900">{v.fuelType}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex gap-2">
                       <Button variant="outline" size="sm" className="flex-1 text-slate-600 border-slate-200">Docs</Button>
                       <Button variant="outline" size="sm" className="flex-1 text-slate-600 border-slate-200">Log Trip</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-dashed border-2 border-slate-200 shadow-none hover:bg-slate-50 flex items-center justify-center cursor-pointer min-h-[200px]">
                 <div className="text-center text-slate-500">
                    <Car className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="font-semibold">Add New Vehicle</p>
                 </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "maintenance" && (
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Maintenance */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-orange-500" /> Maintenance Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {maintenance.map((m, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50">
                      <p className="font-semibold text-sm text-slate-900">{m.task}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-slate-500 font-medium">Due: {m.due}</span>
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">{m.vehicle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expenses & Telemetry Mock */}
            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Battery className="w-4 h-4 text-emerald-500" /> Charging & Fuel Log
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <Gauge className="w-10 h-10 text-slate-200 mb-3" />
                    <p className="text-sm text-slate-500 mb-4">Log fuel fill-ups or EV charging sessions to calculate your actual cost per kilometer.</p>
                    <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">Log Session</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
