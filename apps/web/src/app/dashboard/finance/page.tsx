"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Wallet, Plus, TrendingUp, TrendingDown, Receipt, Target, BellRing, Sparkles, Building, Link2, CreditCard, AlertTriangle, ShieldCheck, Calculator, PieChart, Coins, CheckCircle2 } from "lucide-react";
import { useUserPreferences } from "@/lib/UserPreferencesContext";
import { COUNTRY_DATA } from "@/lib/countryData";
import { toast } from "sonner";
import { ApiClient } from "@/services/api";

export default function FinancePage() {
  const { preferences, setCountry } = useUserPreferences();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: preferences.currency }).format(amount);
  };

  const [accounts, setAccounts] = useState<any[]>([]);
  const [bills, setBills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [accs, subs] = await Promise.all([
          ApiClient.get('/finance-intelligence/accounts'),
          ApiClient.get('/finance-intelligence/subscriptions')
        ]);
        setAccounts(Array.isArray(accs) ? accs : []);
        setBills(Array.isArray(subs) ? subs : []);
      } catch (err) {
        // backend unavailable
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const [fraudAlert, setFraudAlert] = useState(false);

  const handlePayBill = async (id: string, amount: number) => {
    try {
      await ApiClient.put(`/finance-intelligence/subscriptions/${id}`, { status: 'paid' });
      setBills(bills.map(b => b.id === id ? { ...b, status: 'paid' } : b));
      toast.success("Bill Paid", { description: `Successfully paid ${formatMoney(amount)}.` });
    } catch (e) {
      toast.error("Failed to pay bill");
    }
  };

  const handleFlagFraud = () => {
    setFraudAlert(false);
    toast.error("Card Locked", { description: "We have flagged the transaction and locked your card. A representative will contact you shortly." });
  };

  const handleVerifyTransaction = () => {
    setFraudAlert(false);
    toast.success("Transaction Verified", { description: "Thanks for confirming. The AI will learn this spending pattern." });
  };

  const [isTxModalOpen, setIsTxModalOpen] = useState(false);
  const [txAmount, setTxAmount] = useState("");
  const [txDesc, setTxDesc] = useState("");
  const [txAccount, setTxAccount] = useState("");
  const [txType, setTxType] = useState("Expense");

  useEffect(() => {
    if (accounts.length > 0 && !txAccount) {
      setTxAccount(accounts[0].id);
    }
  }, [accounts, txAccount]);

  const submitTransaction = async () => {
    if (!txAmount || isNaN(Number(txAmount))) {
      toast.error("Invalid amount");
      return;
    }
    const amt = Number(txAmount);
    const acc = accounts.find(a => a.id === txAccount || a.name === txAccount);
    if (!acc) {
      toast.error("Please select an account");
      return;
    }
    
    const isExpense = txType === "Expense";
    const newBalance = isExpense ? acc.balance - amt : acc.balance + amt;

    try {
      await ApiClient.put(`/finance-intelligence/accounts/${acc.id}`, { balance: newBalance });
      setAccounts(accounts.map(a => a.id === acc.id ? { ...a, balance: newBalance } : a));
      toast.success("Transaction Added", { description: `Successfully logged ${formatMoney(amt)} to ${acc.name}.` });
      setIsTxModalOpen(false);
      setTxAmount("");
      setTxDesc("");
    } catch (e) {
      toast.error("Failed to add transaction");
    }
  };

  const netWorth = {
    assets: accounts.filter(a => a.type === "Bank" || a.type === "Investment" || a.balance > 0).reduce((sum, a) => sum + (a.balance > 0 ? a.balance : 0), 0),
    liabilities: Math.abs(accounts.filter(a => a.type === "Credit" || a.balance < 0).reduce((sum, a) => sum + (a.balance < 0 ? a.balance : 0), 0)),
    get total() { return this.assets - this.liabilities; }
  };

  const budget: any[] = [];

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
          <Button variant="outline" className="flex-1 sm:flex-none border-slate-200 bg-white text-slate-700">
            <Link2 className="w-4 h-4 mr-2" /> Link Bank
          </Button>
            <Dialog open={isTxModalOpen} onOpenChange={setIsTxModalOpen}>
              <DialogTrigger render={
                 <Button className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700">
                   <Plus className="w-4 h-4 mr-2" /> Add Transaction
                 </Button>
              } />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Transaction</DialogTitle>
                  <DialogDescription>
                    Log a manual expense or income to your accounts.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Type</label>
                    <select 
                      className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={txType} onChange={e => setTxType(e.target.value)}
                    >
                      <option>Expense</option>
                      <option>Income</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Amount</label>
                    <Input 
                      type="number" 
                      placeholder="0.00" 
                      className="col-span-3" 
                      value={txAmount} 
                      onChange={e => setTxAmount(e.target.value)} 
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Account</label>
                    <select 
                      className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={txAccount} onChange={e => setTxAccount(e.target.value)}
                    >
                      {accounts.map(acc => <option key={acc.id} value={acc.id}>{acc.name}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Memo</label>
                    <Input 
                      placeholder="Coffee, Groceries, etc." 
                      className="col-span-3" 
                      value={txDesc} 
                      onChange={e => setTxDesc(e.target.value)} 
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" onClick={submitTransaction}>Save Transaction</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
          {loading ? (
             <p className="text-sm text-slate-500">Loading accounts...</p>
          ) : accounts.length === 0 ? (
             <div className="p-6 border border-dashed border-slate-300 rounded-lg text-center text-slate-500">
               No accounts connected. Link your bank or add an account manually.
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {accounts.map((acc, i) => (
                <Card key={i} className="border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300">
                  <div className={`absolute top-0 left-0 w-1 h-full ${acc.type === 'Credit' || acc.balance < 0 ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                  <CardContent className="p-4 pl-5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        {acc.type === 'Credit' ? <CreditCard className="w-3.5 h-3.5" /> : <Building className="w-3.5 h-3.5" />}
                        {acc.institution || acc.type}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">{acc.name}</h3>
                    <p className={`text-xl font-black ${acc.balance < 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                      {formatMoney(Math.abs(acc.balance))}
                      {acc.balance < 0 && <span className="text-xs font-normal text-rose-500 ml-1">owed</span>}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" /> Synced {new Date(acc.updatedAt || Date.now()).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

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
              <Button size="sm" variant="outline" className="w-full text-xs">Create New Budget</Button>
            </CardContent>
          </Card>

          {/* Upcoming Bills */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
              <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-slate-500" /> Upcoming Subscriptions/Bills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-slate-100">
                 {loading ? (
                   <p className="text-xs p-4 text-center text-slate-500">Loading bills...</p>
                 ) : bills.length === 0 ? (
                   <div className="p-4 text-center text-slate-500 text-sm">
                     No upcoming bills found.
                   </div>
                 ) : bills.map((bill) => (
                   <div key={bill.id} className={`p-4 flex justify-between items-center transition-colors ${bill.status === 'paid' ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50'}`}>
                     <div>
                       <p className={`font-semibold text-sm ${bill.status === 'paid' ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{bill.service || bill.name}</p>
                       <p className={`text-xs font-bold mt-0.5 ${bill.status === 'paid' ? 'text-emerald-600' : 'text-rose-500'}`}>
                         {bill.status === 'paid' ? 'Paid' : new Date(bill.nextBillingDate).toLocaleDateString()}
                       </p>
                     </div>
                     <div className="text-right flex flex-col items-end gap-1">
                       <span className={`font-bold ${bill.status === 'paid' ? 'text-slate-500' : 'text-slate-900'}`}>{formatMoney(bill.amount)}</span>
                       {bill.status !== 'paid' ? (
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
