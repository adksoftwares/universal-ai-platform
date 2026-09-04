"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Wallet, Plus, TrendingUp, TrendingDown, Receipt, Target, BellRing, Sparkles, Building, Link2, CreditCard, AlertTriangle, ShieldCheck, Calculator, PieChart, Coins, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useUserPreferences } from "@/lib/UserPreferencesContext";
import { COUNTRY_DATA } from "@/lib/countryData";
import { toast } from "sonner";

export default function FinancePage() {
  const { preferences, setCountry } = useUserPreferences();
  // Using global currency now instead of local state

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: preferences.currency }).format(amount);
  };

  const [accounts, setAccounts] = useState([
    { name: "Checking Account", institution: "Chase", type: "Bank", balance: 4502.50, updated: "Just now" },
    { name: "Emergency Savings", institution: "Ally", type: "Bank", balance: 12000.00, updated: "2 hrs ago" },
    { name: "Rewards Credit", institution: "Amex", type: "Credit", balance: -840.25, updated: "1 hr ago" }
  ]);

  const [bills, setBills] = useState([
    { id: 1, name: "Electricity Utility", amount: 85.50, due: "Due Tomorrow", paid: false }
  ]);

  const [fraudAlert, setFraudAlert] = useState(true);

  const handlePayBill = (id: number, amount: number) => {
    setBills(bills.map(b => b.id === id ? { ...b, paid: true } : b));
    setAccounts(accounts.map(acc => 
      acc.name === "Checking Account" ? { ...acc, balance: acc.balance - amount } : acc
    ));
    toast.success("Bill Paid", { description: `Successfully paid ${formatMoney(amount)} from Checking Account.` });
  };

  const handleFlagFraud = () => {
    setFraudAlert(false);
    toast.error("Card Locked", { description: "We have flagged the transaction and locked your card. A representative will contact you shortly." });
  };

  const handleVerifyTransaction = () => {
    setFraudAlert(false);
    toast.success("Transaction Verified", { description: "Thanks for confirming. The AI will learn this spending pattern." });
  };

  const handleAddTransaction = () => {
    toast.success("Add Transaction", { description: "Manual transaction entry modal would open here." });
  };

  const netWorth = {
    assets: accounts.filter(a => a.type === "Bank").reduce((sum, a) => sum + a.balance, 0),
    liabilities: Math.abs(accounts.filter(a => a.type === "Credit").reduce((sum, a) => sum + a.balance, 0)),
    get total() { return this.assets - this.liabilities; }
  };

  const cashFlow = {
    starting: 4502.50,
    expectedIncome: 3200.00,
    expectedExpenses: 2100.00,
  };

  const budget = [
    { category: "Housing", spent: 1500, total: 1500, percentage: 100 },
    { category: "Food & Dining", spent: 480, total: 600, percentage: 80 },
    { category: "Transportation", spent: 120, total: 200, percentage: 60 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-emerald-600" /> Financial Intelligence
          </h1>
          <p className="text-slate-500 text-sm mt-1">Multi-currency net worth tracking, deterministic budgeting, and secure organization.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select 
            value={preferences.countryCode} 
            onChange={(e) => setCountry(e.target.value)}
            className="text-sm bg-white border border-slate-200 rounded-md px-3 py-2 font-semibold text-slate-700 focus:outline-none focus:border-emerald-500"
          >
            {Object.entries(COUNTRY_DATA).map(([code, data]) => (
              <option key={code} value={code}>{code} ({data.symbol})</option>
            ))}
          </select>
          <Button variant="outline" className="flex-1 sm:flex-none border-slate-200 bg-white text-slate-700" onClick={() => toast("Bank Sync", { description: "Plaid integration mock opened." })}>
            <Link2 className="w-4 h-4 mr-2" /> Link Bank
          </Button>
          <Button className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700" onClick={handleAddTransaction}>
            <Plus className="w-4 h-4 mr-2" /> Add Transaction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Net Worth & Cash Flow */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Net Worth Dashboard */}
          <Card className="border-emerald-100 shadow-sm bg-gradient-to-br from-emerald-50/50 to-white">
             <CardContent className="p-6">
                <div className="flex justify-between items-start">
                   <div>
                     <p className="text-sm font-bold text-emerald-700 flex items-center gap-1 uppercase tracking-wider mb-1">
                       <PieChart className="w-4 h-4" /> Total Net Worth
                     </p>
                     <h2 className="text-4xl font-black text-slate-900">{formatMoney(netWorth.total)}</h2>
                   </div>
                   <Button variant="outline" size="sm" className="bg-white">View Assets</Button>
                </div>
                <div className="flex gap-6 mt-6 border-t border-emerald-100 pt-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Assets</p>
                    <p className="text-lg font-bold text-emerald-700">{formatMoney(netWorth.assets)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Liabilities</p>
                    <p className="text-lg font-bold text-rose-600">{formatMoney(netWorth.liabilities)}</p>
                  </div>
                </div>
             </CardContent>
          </Card>

          {/* Accounts Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {accounts.map((acc, i) => (
              <Card key={i} className="border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300">
                <div className={`absolute top-0 left-0 w-1 h-full ${acc.type === 'Credit' ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                <CardContent className="p-4 pl-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      {acc.type === 'Credit' ? <CreditCard className="w-3.5 h-3.5" /> : <Building className="w-3.5 h-3.5" />}
                      {acc.institution}
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{acc.name}</h3>
                  <p className={`text-xl font-black ${acc.balance < 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                    {formatMoney(Math.abs(acc.balance))}
                    {acc.balance < 0 && <span className="text-xs font-normal text-rose-500 ml-1">owed</span>}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" /> Synced {acc.updated}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Financial Analysis & Fraud Alert */}
          {fraudAlert && (
            <Card className="border-indigo-100 bg-indigo-50/30 shadow-sm animate-in fade-in slide-in-from-bottom-2">
              <CardHeader className="pb-3 border-b border-indigo-100/50 flex flex-row justify-between items-center">
                 <CardTitle className="text-sm font-bold text-indigo-900 flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-indigo-600" /> AI Spending Insights
                 </CardTitle>
                 <span className="text-[10px] uppercase font-bold tracking-wider bg-white border border-indigo-200 text-indigo-600 px-2 py-0.5 rounded-full">
                   Deterministic Rules Engine
                 </span>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                 <div className="flex gap-3 items-start bg-white p-3 rounded-lg border border-indigo-100 shadow-sm">
                   <div className="bg-amber-100 p-2 rounded shrink-0">
                     <AlertTriangle className="w-4 h-4 text-amber-700" />
                   </div>
                   <div>
                     <p className="text-sm font-semibold text-slate-900">Unusual Spending Detected</p>
                     <p className="text-xs text-slate-600 mt-0.5">A transaction of <strong>{formatMoney(450.00)}</strong> at "TechStore Online" is 3x higher than your usual Electronics spending. Is this correct?</p>
                     <div className="flex gap-2 mt-2">
                       <Button size="sm" variant="outline" className="h-7 text-xs" onClick={handleVerifyTransaction}>Yes, verified</Button>
                       <Button size="sm" className="h-7 text-xs bg-rose-600 hover:bg-rose-700" onClick={handleFlagFraud}>Flag as Fraud</Button>
                     </div>
                   </div>
                 </div>
              </CardContent>
            </Card>
          )}

        </div>

        {/* Right Column: Budgets & Bills */}
        <div className="space-y-6">
          
          {/* Budget Tracking */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
              <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-500" /> Active Budgets
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {budget.map((b, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{b.category}</span>
                    <span>{formatMoney(b.spent)} / {formatMoney(b.total)}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className={`h-2 rounded-full ${b.percentage > 90 ? 'bg-rose-500' : b.percentage > 70 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${b.percentage}%` }}></div>
                  </div>
                </div>
              ))}
              <Button size="sm" variant="outline" className="w-full text-xs" onClick={() => toast("Budget Creation", { description: "Budget creation flow started." })}>Create New Budget</Button>
            </CardContent>
          </Card>

          {/* Upcoming Bills */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
              <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-slate-500" /> Upcoming Bills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-slate-100">
                 {bills.map((bill) => (
                   <div key={bill.id} className={`p-4 flex justify-between items-center transition-colors ${bill.paid ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50'}`}>
                     <div>
                       <p className={`font-semibold text-sm ${bill.paid ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{bill.name}</p>
                       <p className={`text-xs font-bold mt-0.5 ${bill.paid ? 'text-emerald-600' : 'text-rose-500'}`}>{bill.paid ? 'Paid' : bill.due}</p>
                     </div>
                     <div className="text-right flex flex-col items-end gap-1">
                       <span className={`font-bold ${bill.paid ? 'text-slate-500' : 'text-slate-900'}`}>{formatMoney(bill.amount)}</span>
                       {!bill.paid ? (
                         <Button size="sm" className="h-6 text-[10px] px-2 bg-slate-900" onClick={() => handlePayBill(bill.id, bill.amount)}>Pay Now</Button>
                       ) : (
                         <div className="flex items-center text-[10px] font-bold text-emerald-600 mt-1"><CheckCircle2 className="w-3 h-3 mr-1"/> Settled</div>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
            </CardContent>
          </Card>
          
          <p className="text-center text-[10px] text-slate-400 px-4">
            Financial calculations are deterministic. AI only provides explanations and formatting, never account manipulation.
          </p>

        </div>

      </div>
    </div>
  );
}
