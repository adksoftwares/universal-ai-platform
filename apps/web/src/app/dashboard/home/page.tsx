"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, CheckSquare, ShoppingCart, Wrench, ShieldAlert, Package, Calendar, Sparkles, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const [chores, setChores] = useState([
    { id: 1, name: "Take out recycling", assignee: "Alex", schedule: "Weekly - Tuesday", status: "Pending" },
    { id: 2, name: "Vacuum living room", assignee: "Sam", schedule: "Weekly - Friday", status: "Done" },
  ]);

  const [shopping, setShopping] = useState([
    { id: 1, item: "Oat Milk", category: "Groceries", quantity: 2, checked: false },
    { id: 2, item: "Dish Soap", category: "Supplies", quantity: 1, checked: false },
    { id: 3, item: "Apples", category: "Groceries", quantity: 6, checked: false },
  ]);

  const toggleChore = (id: number) => {
    setChores(chores.map(c => c.id === id ? { ...c, status: c.status === "Done" ? "Pending" : "Done" } : c));
  };

  const toggleShopping = (id: number) => {
    setShopping(shopping.map(s => s.id === id ? { ...s, checked: !s.checked } : s));
  };

  const handleQuickAction = (action: string) => {
    toast.success(`${action} opened`, { description: `Interactive modal for ${action.toLowerCase()} would open here.` });
  };

  const maintenance = [
    { task: "HVAC Filter Replacement", nextService: "Nov 15, 2027", provider: "Self" },
    { task: "Water Heater Flush", nextService: "Jan 10, 2028", provider: "Plumbing Pros" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Home className="w-6 h-6 text-teal-500" /> Home & Family Management
          </h1>
          <p className="text-slate-500 text-sm mt-1">Organize household chores, shopping, maintenance, and shared schedules securely.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-200 bg-white text-slate-700">
             <Users className="w-4 h-4 mr-2" /> Manage Household
          </Button>
        </div>
      </div>

      {/* AI Privacy Warning */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 flex items-start sm:items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-teal-600 shrink-0" />
        <p className="text-xs text-teal-800">
          <strong>Household Privacy Boundary:</strong> Private member data (e.g., personal finances, health) is explicitly hidden from the shared household view. Only shared tasks, chores, and lists are accessible.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'overview' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Daily Briefing
        </button>
        <button 
          onClick={() => setActiveTab("chores")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'chores' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Chores & Lists
        </button>
        <button 
          onClick={() => setActiveTab("maintenance")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'maintenance' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Maintenance & Inventory
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {activeTab === "overview" && (
          <>
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-slate-50 to-white">
                <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
                  <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-500" /> Household AI Briefing
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p>Good morning! Here is the summary for your household today:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You have <strong>1 pending chore</strong> (Take out recycling) assigned to Alex.</li>
                      <li>There are <strong>3 items</strong> on the Shared Grocery List.</li>
                      <li><strong>Maintenance Alert:</strong> HVAC Filter Replacement is coming up on Nov 15.</li>
                    </ul>
                    <p className="text-xs text-slate-500 italic mt-4 pt-4 border-t border-slate-100">
                      Information is securely aggregated only from authorized shared household records.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Shared Calendar Quick View */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-500" /> Upcoming Family Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    <div className="p-4 hover:bg-slate-50 flex items-start gap-4">
                      <div className="bg-rose-50 text-rose-700 rounded p-2 text-center min-w-[50px]">
                        <p className="text-[10px] uppercase font-bold">Oct</p>
                        <p className="text-xl font-black">24</p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Parent-Teacher Conference</p>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock className="w-3 h-3"/> 15:30 - School</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
               {/* Quick Actions */}
               <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-sm font-bold text-slate-800">Household Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start text-slate-600" onClick={() => handleQuickAction("Add Chore")}><CheckSquare className="w-4 h-4 mr-2" /> Add Chore</Button>
                  <Button variant="outline" className="w-full justify-start text-slate-600" onClick={() => handleQuickAction("Shopping List")}><ShoppingCart className="w-4 h-4 mr-2" /> Add to Shopping List</Button>
                  <Button variant="outline" className="w-full justify-start text-slate-600" onClick={() => handleQuickAction("Log Inventory")}><Package className="w-4 h-4 mr-2" /> Log Inventory Item</Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "chores" && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Chores */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50 flex flex-row justify-between items-center">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-emerald-500" /> Assigned Chores
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {chores.map((chore, i) => (
                      <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer" onClick={() => toggleChore(chore.id)}>
                        <div className="flex items-start gap-3">
                          <input type="checkbox" checked={chore.status === "Done"} className="mt-1" readOnly />
                          <div>
                            <p className={`font-semibold text-sm ${chore.status === "Done" ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{chore.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{chore.schedule}</p>
                          </div>
                        </div>
                        <div className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">
                          {chore.assignee}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Shopping List */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-amber-500" /> Shared Groceries
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {shopping.map((item, i) => (
                      <div key={i} className="p-3 flex justify-between items-center text-sm cursor-pointer hover:bg-slate-50" onClick={() => toggleShopping(item.id)}>
                        <div className="flex items-center gap-2 text-slate-800">
                          <input type="checkbox" checked={item.checked} readOnly />
                          <span className={`font-medium ${item.checked ? 'text-slate-400 line-through' : ''}`}>{item.item}</span>
                        </div>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 rounded">Qty: {item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-slate-100">
                    <input type="text" placeholder="Add item..." className="w-full text-sm border-none bg-slate-50 p-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "maintenance" && (
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Maintenance */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-500" /> Home Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {maintenance.map((m, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50">
                      <p className="font-semibold text-sm text-slate-900">{m.task}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3"/> Due: {m.nextService}</span>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase">{m.provider}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inventory */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-500" /> High-Value Inventory
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <Package className="w-12 h-12 text-slate-200 mb-3" />
                  <p className="text-sm text-slate-500 mb-4">Track warranties, appliances, and serial numbers.</p>
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-200 hover:bg-purple-50">Add First Item</Button>
                </div>
              </CardContent>
            </Card>

          </div>
        )}

      </div>
    </div>
  );
}
