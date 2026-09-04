"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Search, Sparkles, AlertCircle, ShoppingCart, Star, Package, ArrowRightLeft, CreditCard } from "lucide-react";
import { useState } from "react";

export default function ShoppingPage() {
  const [activeTab, setActiveTab] = useState("discover");

  const wishlists = [
    { name: "Tech Upgrades", items: 3 },
    { name: "Living Room Decor", items: 5 }
  ];

  const orders = [
    { id: "ORD-9281A", seller: "Amazon", total: "$124.99", status: "In Transit", date: "Oct 12" },
    { id: "ORD-773B", seller: "Apple Store", total: "$899.00", status: "Delivered", date: "Sep 28" }
  ];

  const returns = [
    { id: "RET-11A", item: "Wireless Mouse", status: "Refunded", amount: "$45.00" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-fuchsia-500" /> Shopping & Commerce
          </h1>
          <p className="text-slate-500 text-sm mt-1">Discover products, track prices, and organize your purchases securely.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-200 bg-white text-slate-700">
             <ShoppingCart className="w-4 h-4 mr-2" /> View Cart
          </Button>
        </div>
      </div>

      {/* AI Purchase Safety Warning */}
      <div className="bg-fuchsia-50 border border-fuchsia-200 rounded-lg p-3 flex items-start sm:items-center gap-3">
        <AlertCircle className="w-5 h-5 text-fuchsia-600 shrink-0" />
        <p className="text-xs text-fuchsia-800">
          <strong>Purchase Protection:</strong> The AI acts as a shopping assistant, but <strong>will never execute a purchase automatically</strong>. All transactions require your explicit confirmation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
        <button 
          onClick={() => setActiveTab("discover")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'discover' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Discover & Search
        </button>
        <button 
          onClick={() => setActiveTab("wishlist")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'wishlist' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Wishlists
        </button>
        <button 
          onClick={() => setActiveTab("orders")}
          className={`pb-2 whitespace-nowrap text-sm font-bold border-b-2 transition-colors ${activeTab === 'orders' ? 'border-fuchsia-600 text-fuchsia-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Orders & Returns
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {activeTab === "discover" && (
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
              <Search className="w-5 h-5 text-slate-400 ml-2" />
              <input 
                type="text" 
                placeholder="Ask AI: 'Find me a good laptop for university under $800...'" 
                className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 p-2"
              />
              <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 rounded-lg">Search</Button>
            </div>

            {/* AI Recommendation Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-white shadow-sm">
                <CardHeader className="pb-3 border-b border-fuchsia-100 flex flex-row justify-between items-center">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-fuchsia-500" /> AI Purchase Planner
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                    Based on your saved Household Inventory, you already own a <em>'Dell Monitor'</em>. If you are buying a new laptop, you may want to ensure it has USB-C display support.
                  </p>
                  <Button variant="outline" className="text-fuchsia-700 border-fuchsia-200 bg-white w-full hover:bg-fuchsia-50 text-sm">
                    Refine Search Criteria
                  </Button>
                </CardContent>
              </Card>

              {/* Mock Product Compare */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-sm font-bold text-slate-800">Product Comparison Module</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50 border-b border-slate-50">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center"><Package className="w-5 h-5 text-slate-400"/></div>
                      <div>
                        <p className="font-semibold text-sm text-slate-900">MacBook Air M2</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400"/> 4.8 (Apple Store)</p>
                      </div>
                    </div>
                    <p className="font-bold text-slate-900">$899</p>
                  </div>
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center"><Package className="w-5 h-5 text-slate-400"/></div>
                      <div>
                        <p className="font-semibold text-sm text-slate-900">Dell XPS 13</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400"/> 4.5 (Amazon)</p>
                      </div>
                    </div>
                    <p className="font-bold text-slate-900">$999</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="lg:col-span-3">
            <Card className="border-slate-200 shadow-sm max-w-2xl mx-auto">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50 flex flex-row justify-between items-center">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" /> My Wishlists
                </CardTitle>
                <Button size="sm" variant="ghost" className="text-fuchsia-600 hover:bg-fuchsia-50">+ Create List</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {wishlists.map((list, i) => (
                    <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
                      <div>
                        <p className="font-bold text-slate-900">{list.name}</p>
                        <p className="text-xs text-slate-500 mt-1">{list.items} items saved</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-slate-600">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Orders */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Package className="w-4 h-4 text-sky-500" /> Purchase Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {orders.map((o, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-sm text-slate-900">{o.id}</p>
                          <p className="text-xs text-slate-500">{o.seller} • {o.date}</p>
                        </div>
                        <p className="font-bold text-slate-900">{o.total}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${o.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : 'bg-sky-50 text-sky-700'}`}>
                        {o.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Returns & Finance */}
            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4 text-orange-500" /> Returns & Refunds
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {returns.map((r, i) => (
                      <div key={i} className="p-4 hover:bg-slate-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm text-slate-900">{r.item}</p>
                            <p className="text-xs text-slate-500">{r.id}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-emerald-600">+{r.amount}</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">{r.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Finance Integration Mock */}
              <Card className="bg-slate-900 text-white shadow-sm">
                 <CardContent className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="bg-slate-800 p-2 rounded-full"><CreditCard className="w-4 h-4 text-slate-300"/></div>
                     <div>
                       <p className="text-sm font-bold">Shopping Budget</p>
                       <p className="text-xs text-slate-400">Connected to Finance App</p>
                     </div>
                   </div>
                   <Button variant="ghost" className="text-sky-400 hover:bg-slate-800 hover:text-sky-300 text-xs">View Budgets</Button>
                 </CardContent>
              </Card>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
