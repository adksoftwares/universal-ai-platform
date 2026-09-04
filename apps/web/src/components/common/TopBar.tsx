"use client";

import { useState } from "react";
import { Menu, Search, Bell, User } from "lucide-react";
import Link from "next/link";

interface TopBarProps {
  onMenuClick: () => void;
  title?: string;
}

export function TopBar({ onMenuClick, title = "Dashboard" }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-40">
      <div className="flex items-center">
        <button 
          onClick={onMenuClick}
          className="mr-4 p-2 -ml-2 text-slate-500 hover:text-slate-700 md:hidden rounded-md hover:bg-slate-100"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="flex items-center space-x-4">
        {/* Global Search */}
        <div className="hidden md:block relative w-64">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              placeholder="Search everything..." 
              className="w-full bg-slate-100 border-transparent rounded-full py-1.5 pl-9 pr-4 text-sm focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            />
          </div>
          
          {/* Search Dropdown Results */}
          {isSearchOpen && searchQuery.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden flex flex-col max-h-96">
              <div className="p-2 text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-100 uppercase tracking-wider">
                Results for "{searchQuery}"
              </div>
              <div className="overflow-y-auto flex-1 p-2 space-y-1">
                <Link href="/dashboard/ai" className="block px-3 py-2 rounded hover:bg-slate-100 text-sm">
                  <span className="text-blue-600 font-medium">Chat:</span> "How to use Python..."
                </Link>
                <Link href="/dashboard/life/tasks" className="block px-3 py-2 rounded hover:bg-slate-100 text-sm">
                  <span className="text-emerald-600 font-medium">Task:</span> Learn Python basics
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="/dashboard/notifications" className="text-slate-500 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 hidden md:block relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </Link>

        <button 
          className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors overflow-hidden"
          onClick={() => alert('Profile menu is in beta.')}
        >
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
