"use client";

import { useState } from "react";
import { Sidebar } from "@/components/common/Sidebar";
import { TopBar } from "@/components/common/TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <Sidebar isMobileOpen={isMobileMenuOpen} setMobileOpen={setIsMobileMenuOpen} />
      
      <main className="flex-1 flex flex-col h-screen min-w-0">
        <TopBar onMenuClick={() => setIsMobileMenuOpen(true)} />
        
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
