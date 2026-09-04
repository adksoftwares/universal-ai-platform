import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Lock, CheckCircle2, Shield, Eye, ArrowRight, User, Calendar, MessageSquare, Briefcase, Plane, Home, GraduationCap, Wallet } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
            {/* Elegant U Logo Mark */}
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 6v6a5 5 0 0 0 10 0V6" />
              <path d="M7 6h10" className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </svg>
          </div>
          <span className="font-medium text-sm tracking-wide text-slate-900">Universal Human AI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
          <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</Link>
          <Link href="#capabilities" className="hover:text-slate-900 transition-colors">Capabilities</Link>
          <Link href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
          <Link href="#global" className="hover:text-slate-900 transition-colors">For everyone</Link>
        </nav>

        <div className="flex items-center space-x-5 text-sm font-medium">
          <Link href="/login" className="text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Login</Link>
          <Link href="/signup">
            <Button className="rounded-md bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all hover:-translate-y-0.5">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="font-playfair text-[3.5rem] leading-[1.1] lg:text-[5rem] text-slate-900 mb-8 tracking-tight">
              Your Personal <br className="hidden sm:block" />
              Digital Assistant <br className="hidden sm:block" />
              for Life.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 max-w-lg mb-4 leading-relaxed font-light">
              One secure platform to ask for help, organize your life, understand information, plan goals, and get things done.
            </p>
            <p className="text-base text-slate-500 max-w-md mb-10 font-light">
              Built for everyone, regardless of language or country.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/signup" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 font-medium">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-lg border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 transition-all font-medium group">
                  See How It Works <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Sophisticated UI Preview */}
            <div className="relative z-10 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:p-8 max-w-lg w-full mx-auto transform lg:rotate-[1deg] hover:rotate-0 transition-transform duration-500 ease-out">
              
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-playfair italic text-xl">S</div>
                <div>
                  <h3 className="font-semibold text-slate-900">Sophia</h3>
                  <p className="text-xs text-slate-500">Universal Assistant</p>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <p className="text-2xl font-playfair text-slate-900">Good evening.</p>
                <p className="text-slate-600">How can I help you today?</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8 flex items-center text-slate-400 text-sm">
                <MessageSquare className="w-4 h-4 mr-3 opacity-50" />
                Ask Sophia anything...
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Today</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 mr-3 shrink-0"></div>
                      Prepare for tomorrow's meeting
                    </li>
                    <li className="flex items-start text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 mr-3 shrink-0"></div>
                      Study Physics — 7:00 PM
                    </li>
                    <li className="flex items-start text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-3 shrink-0"></div>
                      Pay electricity bill — due tomorrow
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Upcoming</h4>
                  <div className="bg-white border border-slate-100 rounded-lg p-3 shadow-sm flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Tomorrow — 10:00 AM</p>
                      <p className="text-xs text-slate-500">Meeting with team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-slate-100/50 rounded-3xl -rotate-3 scale-[1.05] -z-10 origin-bottom-left transition-transform duration-500"></div>
          </div>

        </section>

        {/* HUMAN-CENTERED CAPABILITIES SECTION */}
        <section id="capabilities" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-playfair text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">One assistant. <br/> Many parts of life.</h2>
              <p className="text-lg text-slate-600 font-light">
                Sophia brings everyday tasks, information, planning, learning and communication into one intelligent experience. Get things done without jumping between apps.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Central Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center z-20 shadow-xl shadow-slate-900/20">
                <span className="font-playfair italic text-white text-3xl">S</span>
              </div>

              {/* Connecting Lines (Subtle) */}
              <div className="absolute inset-0 border border-slate-100 rounded-[3rem] -z-10 bg-slate-50/50"></div>

              {/* Organic Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 relative z-10">
                
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square md:col-start-1 md:row-start-1 hover:shadow-md transition-shadow">
                  <User className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Life</span>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square md:col-start-3 md:row-start-1 hover:shadow-md transition-shadow">
                  <Briefcase className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Work</span>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square lg:col-start-4 lg:row-start-2 hover:shadow-md transition-shadow">
                  <GraduationCap className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Learning</span>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square lg:col-start-1 lg:row-start-3 hover:shadow-md transition-shadow">
                  <Plane className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Travel</span>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-3 hover:shadow-md transition-shadow">
                  <Wallet className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Finance</span>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square lg:col-start-3 lg:row-start-3 hover:shadow-md transition-shadow">
                  <Home className="w-6 h-6 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Home</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h2 className="font-playfair text-3xl lg:text-4xl text-slate-900 mb-16 tracking-tight text-center">How Sophia Works</h2>
            
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              
              <div className="flex flex-col">
                <span className="text-slate-300 font-playfair text-5xl mb-6">01</span>
                <h3 className="text-xl font-medium text-slate-900 mb-3">Ask</h3>
                <p className="text-slate-600 font-light leading-relaxed">Tell Sophia what you need using natural language. It understands nuance, intent, and complex requests across domains.</p>
              </div>

              <div className="flex flex-col">
                <span className="text-slate-300 font-playfair text-5xl mb-6">02</span>
                <h3 className="text-xl font-medium text-slate-900 mb-3">Understand</h3>
                <p className="text-slate-600 font-light leading-relaxed">Sophia securely retrieves relevant context from your connected life—your calendar, preferences, and documents—without exposing private memory.</p>
              </div>

              <div className="flex flex-col">
                <span className="text-slate-300 font-playfair text-5xl mb-6">03</span>
                <h3 className="text-xl font-medium text-slate-900 mb-3">Act</h3>
                <p className="text-slate-600 font-light leading-relaxed">Sophia prepares the solution, drafts the message, or plans the route, and always asks for your confirmation before taking important actions.</p>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST & PRIVACY */}
        <section id="privacy" className="py-24 bg-slate-900 text-white">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl mb-6 tracking-tight">Your life belongs <br/> to you.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Sophia is designed around privacy, user control, and transparent permissions. The system acts as a trusted companion, never taking silent control.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-slate-500 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-200 mb-1">Secure Data</h4>
                    <p className="text-sm text-slate-400">Strict separation between public, shared, and private information.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="w-5 h-5 text-slate-500 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-200 mb-1">User Control</h4>
                    <p className="text-sm text-slate-400">View, edit, or delete the memory Sophia holds about you at any time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-slate-500 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-200 mb-1">Permission-based Actions</h4>
                    <p className="text-sm text-slate-400">High-risk actions require explicit, manual human authorization.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/50">
                <span className="text-sm font-medium text-slate-300">Action Confirmation</span>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded font-medium">High Risk</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">You are about to:</p>
              <p className="text-lg text-white mb-6 font-medium">Pay Electricity Bill ($120.00)</p>
              
              <div className="flex gap-3 mt-8">
                <div className="flex-1 py-3 text-center rounded-lg border border-slate-600 text-slate-300 text-sm font-medium opacity-50">Cancel</div>
                <div className="flex-1 py-3 text-center rounded-lg bg-white text-slate-900 text-sm font-medium">Confirm</div>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL POSITIONING */}
        <section id="global" className="py-32 bg-white overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-10">
            <h2 className="font-playfair text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">Built for humans everywhere.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-16">
              Different languages. Different countries. Different lives. One intelligent platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['English', 'தமிழ்', 'සිංහල', 'العربية', 'Español', 'Français', 'Deutsch', 'हिन्दी', '中文', '日本語'].map((lang, i) => (
                <span 
                  key={lang} 
                  className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 text-lg hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          {/* Subtle World Pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
            <Globe className="w-[1000px] h-[1000px]" strokeWidth={0.5} />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#FAFAFA] border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs">U</div>
                <span className="font-medium text-sm text-slate-900 tracking-wide">Universal Human AI</span>
              </div>
              <p className="text-sm text-slate-500 font-light">Your personal digital assistant for life.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-light">
                <li><Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</Link></li>
                <li><Link href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-light">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-light">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Cookie Settings</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/60 text-xs text-slate-400 font-light">
            <p>&copy; {new Date().getFullYear()} Universal Human AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Made for humanity.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
