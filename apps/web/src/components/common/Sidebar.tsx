"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { 
  Home, 
  MessageSquare, 
  CalendarDays, 
  FileText, 
  Target, 
  BookOpen, 
  Briefcase, 
  Wallet, 
  Plane, 
  ShieldAlert, 
  Settings, 
  LogOut,
  Bell,
  Activity,
  HeartPulse,
  Plug,
  Building2,
  Users,
  Mail
} from "lucide-react";

export function Sidebar({ isMobileOpen, setMobileOpen }: { isMobileOpen: boolean, setMobileOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const navigation = [
    { section: "Main", items: [
      { name: "Home", href: "/dashboard", icon: Home },
      { name: "AI Assistant", href: "/dashboard/ai", icon: MessageSquare },
      { name: "My Life", href: "/dashboard/life", icon: CalendarDays },
      { name: "Documents", href: "/dashboard/documents", icon: FileText },
    ]},
    { section: "Growth", items: [
      { name: "Education", href: "/dashboard/education", icon: BookOpen },
      { name: "Career", href: "/dashboard/career", icon: Briefcase },
      { name: "Habits", href: "/dashboard/development", icon: Activity },
      { name: "Goals", href: "/dashboard/goals", icon: Target },
    ]},
    { section: "Safety & Health", items: [
      { name: "Health", href: "/dashboard/health", icon: HeartPulse },
      { name: "Preparedness", href: "/dashboard/emergency", icon: ShieldAlert },
    ]},
    { section: "Connections", items: [
      { name: "People", href: "/dashboard/people", icon: Users },
      { name: "Communication", href: "/dashboard/communication", icon: Mail },
      { name: "Meetings", href: "/dashboard/meetings", icon: CalendarDays },
    ]},
    { section: "Services & Planning", items: [
      { name: "Citizen Services", href: "/dashboard/citizen", icon: Building2 },
      { name: "Finance", href: "/dashboard/finance", icon: Wallet },
      { name: "Travel", href: "/dashboard/travel", icon: Plane },
      { name: "Integrations", href: "/dashboard/services", icon: Plug },
    ]}
  ];

  const renderNav = () => (
    <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
      {navigation.map((group) => (
        <div key={group.section}>
          <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {group.section}
          </h3>
          <div className="space-y-1">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden" 
          onClick={() => setMobileOpen(false)} 
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-200 ease-in-out
        md:relative md:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-200 shrink-0">
          <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-3">U</div>
          <span className="font-bold text-slate-900 tracking-tight">Universal AI</span>
        </div>

        {renderNav()}

        <div className="p-4 border-t border-slate-200 space-y-1">
          <Link href="/dashboard/notifications" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 md:hidden">
            <Bell className="w-5 h-5 shrink-0" />
            <span>Notifications</span>
          </Link>
          <Link href="/dashboard/settings" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
            <Settings className="w-5 h-5 shrink-0" />
            <span>Settings</span>
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
            <LogOut className="w-5 h-5 shrink-0" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
