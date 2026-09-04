"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Plus, MapPin, CalendarDays, Wallet, Clock, ListChecks, FileText, Search, Map, ShieldAlert, Sparkles, Navigation } from "lucide-react";
import { ApiClient } from "@/services/api";

export default function TravelPage() {
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [savedPlaces, setSavedPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bookings, places] = await Promise.all([
          ApiClient.get('/travel-intelligence/bookings'),
          ApiClient.get('/travel-intelligence/saved-places')
        ]);
        setItinerary((bookings as any[]) || []);
        setSavedPlaces((places as any[]) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Map className="w-6 h-6 text-sky-500" /> Travel & Location Intelligence
          </h1>
          <p className="text-slate-500 text-sm mt-1">Organize global trips, manage itineraries, and explore locations securely.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none border-slate-200 bg-white text-slate-700">
             <MapPin className="w-4 h-4 mr-2" /> Current Location
          </Button>
          <Button className="flex-1 sm:flex-none bg-sky-600 hover:bg-sky-700">
            <Plus className="w-4 h-4 mr-2" /> New Trip
          </Button>
        </div>
      </div>

      {/* AI Location Safety Warning */}
      <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 flex items-start sm:items-center gap-3">
        <Navigation className="w-5 h-5 text-sky-500 shrink-0" />
        <p className="text-xs text-sky-800">
          <strong>Location Privacy:</strong> Continuous location tracking is strictly disabled. Location context is only retrieved when you explicitly ask a location-aware question.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Context & Places */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Active Trip Context */}
          <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white shadow-sm overflow-hidden">
            <div className="h-32 bg-sky-100 flex items-center justify-center relative">
              <Plane className="w-12 h-12 text-sky-300 absolute" />
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop" alt="Japan" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
            </div>
            <CardContent className="p-5 pt-4">
              <div className="flex justify-between items-start mb-2">
                 <div className="inline-block bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Upcoming Trip</div>
                 <div className="inline-block border border-rose-200 text-rose-600 bg-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3"/> Safety Verified
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Japan Autumn 2027</h3>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CalendarDays className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Oct 10 - Oct 24, 2027</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Wallet className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Budget: ¥650,000 JPY / $4,500 USD</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-white text-sky-700 border-sky-200 hover:bg-sky-50">
                  <FileText className="w-4 h-4 mr-1" /> Docs
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-white text-sky-700 border-sky-200 hover:bg-sky-50">
                  <Map className="w-4 h-4 mr-1" /> Map
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Saved Places Map Adapter Mock */}
          <Card className="border-slate-200 shadow-sm">
             <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500" /> Saved Places</h3>
             </div>
             <CardContent className="p-0">
               {loading ? (
                 <p className="text-xs p-4 text-center text-slate-500">Loading saved places...</p>
               ) : savedPlaces.length === 0 ? (
                 <div className="p-4 text-center text-slate-500 text-sm">
                   No saved places. Try saving some locations from the map.
                 </div>
               ) : (
                 <div className="divide-y divide-slate-100">
                   {savedPlaces.map((place, i) => (
                     <div key={i} className="p-4 hover:bg-slate-50 flex justify-between items-center">
                       <div>
                         <p className="font-semibold text-sm text-slate-900">{place.name}</p>
                         <p className="text-xs text-slate-500 mt-0.5">{place.category}</p>
                       </div>
                       {place.rating && <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded">★ {place.rating}</span>}
                     </div>
                   ))}
                 </div>
               )}
               <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                 <div className="relative">
                   <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                   <input type="text" placeholder="Search Google Maps Adapter..." className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-md bg-white focus:outline-none focus:border-sky-500" />
                 </div>
               </div>
             </CardContent>
          </Card>

        </div>

        {/* Right Col: Timeline Itinerary & Bookings */}
        <div className="lg:col-span-2 space-y-6">
          
          <Card className="border-slate-200 shadow-sm">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <h3 className="font-bold text-slate-800">Global Itinerary</h3>
              <Button size="sm" variant="ghost" className="text-sky-600 hover:bg-sky-50 hover:text-sky-700">
                <Plus className="w-4 h-4 mr-1" /> Add Booking
              </Button>
            </div>
            <CardContent className="p-6">
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                {loading ? (
                   <p className="text-sm text-slate-500 ml-4">Loading itinerary...</p>
                ) : itinerary.length === 0 ? (
                   <div className="p-6 text-center text-slate-500 ml-4 border border-dashed rounded-lg">
                     No flights booked or itinerary items found.
                   </div>
                ) : (
                  itinerary.map((item, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-sky-400"></div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-slate-800">{item.provider} - {item.type}</h4>
                        <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-1 rounded self-start">
                          {item.startDate ? new Date(item.startDate).toLocaleDateString() : 'TBD'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                        {item.startDate && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {new Date(item.startDate).toLocaleTimeString()}</span>}
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {item.destination || item.origin || 'Location pending'}</span>
                      </div>
                    </div>
                  ))
                )}
                
              </div>
              
              <div className="mt-4 pt-4 border-t border-dashed border-slate-200 text-center flex flex-col gap-3">
                 <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-left">
                   <p className="text-xs text-indigo-900 flex items-start gap-2">
                     <Sparkles className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                     <strong>AI Suggestion:</strong> Since you are visiting Harajuku in the morning on Oct 11, I can generate a map itinerary for lunch spots nearby that match your saved preferences (Sushi, budget under ¥3000).
                   </p>
                 </div>
                 <Button variant="outline" className="text-indigo-600 border-indigo-200 w-full hover:bg-indigo-50">
                    Accept AI Itinerary Suggestion
                 </Button>
              </div>
            </CardContent>
          </Card>

          {/* Phase 29 Geofencing & Location Automations */}
          <Card className="border-slate-200 shadow-sm">
             <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center rounded-t-xl">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <Map className="w-4 h-4 text-emerald-500" /> Location Automations (Geofencing)
               </h3>
               <Button size="sm" variant="ghost" className="text-emerald-600 hover:bg-emerald-50">
                 <Plus className="w-4 h-4 mr-1" /> New Rule
               </Button>
             </div>
             <CardContent className="p-4 space-y-3">
               <div className="bg-white border border-slate-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                 <div>
                   <p className="text-sm font-semibold text-slate-800">When I arrive at Work</p>
                   <p className="text-xs text-slate-500">Trigger: Remind me to submit daily report</p>
                 </div>
                 <div className="w-8 h-4 bg-emerald-500 rounded-full relative">
                   <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                 </div>
               </div>
               
               <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-600 italic">
                    Location automations trigger locally. Background location is strictly minimized and not stored indefinitely without explicit permission.
                  </p>
               </div>
             </CardContent>
          </Card>
          
          <p className="text-center text-[10px] text-slate-400 px-4">
            Travel bookings and provider data are synchronized securely. No real-world bookings are made without your explicit final confirmation.
          </p>

        </div>

      </div>
    </div>
  );
}
