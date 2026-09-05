"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookOpen, GraduationCap, Library, LayoutList, CheckCircle2, ChevronRight, Clock, Plus, Book, FileText, Sparkles, Network, MessageSquare, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ApiClient } from "@/services/api";

export default function EducationPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [flashcards, setFlashcards] = useState<any[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingFlashcards, setLoadingFlashcards] = useState(true);

  useEffect(() => {
    fetchCourses();
    fetchFlashcards();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoadingCourses(true);
      const res = await ApiClient.get<any[]>('/learning-intelligence/topic');
      setCourses(Array.isArray(res) ? res : []);
    } catch (error) {
      setCourses([]);
    } finally {
      setLoadingCourses(false);
    }
  };

  const fetchFlashcards = async () => {
    try {
      setLoadingFlashcards(true);
      const res = await ApiClient.get<any[]>('/learning-intelligence/flashcard');
      setFlashcards(Array.isArray(res) ? res : []);
    } catch (error) {
      setFlashcards([]);
    } finally {
      setLoadingFlashcards(false);
    }
  };

  const createCourse = async () => {
    const name = prompt("Enter topic name:");
    if (!name) return;
    try {
      const newCourse = await ApiClient.post('/learning-intelligence/topic', {
        name,
        code: name.substring(0, 3).toUpperCase() + "101",
        status: "Active",
        progress: 0,
        institution: "Self-Study"
      });
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Failed to create course", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" /> Learning & Knowledge Intelligence
          </h1>
          <p className="text-slate-500 text-sm mt-1">AI-assisted tutoring, personal knowledge management, and verified research.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
           <Button variant="outline" className="flex-1 sm:flex-none border-slate-200">
             <Library className="w-4 h-4 mr-2 text-slate-500" /> Knowledge Library
           </Button>
           <Button className="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-700" onClick={createCourse}>
             <Plus className="w-4 h-4 mr-2" /> Create Subject
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Learning Management */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Courses / Subjects Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loadingCourses ? (
              <div className="col-span-2 text-center text-slate-500">Loading courses...</div>
            ) : courses.length === 0 ? (
              <div className="col-span-2 text-center text-slate-500">Integration Required / No courses found</div>
            ) : courses.map(course => (
              <Card key={course.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {course.code || "N/A"}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> {course.status || "Active"}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 leading-tight">{course.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{course.institution || "Self-Study"}</p>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-500">Mastery Estimate</span>
                      <span className="text-slate-700">{course.progress || 0}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${course.progress || 0}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                     <Button variant="ghost" size="sm" className="flex-1 text-slate-600 h-8" onClick={() => alert('Integration Required')}>
                       <Network className="w-4 h-4 mr-2" /> Map
                     </Button>
                     <Button variant="ghost" size="sm" className="flex-1 text-indigo-600 h-8 hover:text-indigo-700 hover:bg-indigo-50">
                       Study <ChevronRight className="w-4 h-4 ml-1" />
                     </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Tutor & Source-Based Q&A */}
          <Card className="border-indigo-200 bg-white shadow-sm overflow-hidden">
            <CardHeader className="bg-indigo-50/50 border-b border-indigo-100 pb-3 flex flex-row justify-between items-center">
              <CardTitle className="text-base font-bold text-indigo-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" /> AI Tutor (Socratic Mode)
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                  <CheckCircle className="w-3 h-3 inline mr-1" /> Source-Verified
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
               
               {/* Chat Bubbles */}
               <div className="space-y-4">
                 <div className="flex gap-3 items-start">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                     <span className="text-xs font-bold text-slate-600">You</span>
                   </div>
                   <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-800">
                     Can you explain the partition function in simple terms? Use my uploaded textbook.
                   </div>
                 </div>

                 <div className="flex gap-3 items-start">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                     <Sparkles className="w-4 h-4 text-indigo-600" />
                   </div>
                   <div className="bg-indigo-50 border border-indigo-100 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-800 w-full space-y-3">
                     <p>I found the definition in <strong>"Statistical Physics (Page 42)"</strong>.</p>
                     <div className="border-l-2 border-indigo-300 pl-3 text-slate-600 italic">
                       "The partition function Z encodes the statistical properties of a system in thermodynamic equilibrium..."
                     </div>
                     <p>In simple terms, think of it as a normalizing factor that tells us how probabilities of different energy states are distributed.</p>
                     <div className="bg-white p-2 rounded border border-indigo-100 flex gap-2 items-start mt-2">
                       <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                       <p className="text-xs text-slate-600 font-medium">Socratic Question: If the temperature increases, what happens to the probability of the system being in a higher energy state?</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="pt-2">
                 <input type="text" placeholder="Integration Required: Type your answer or ask a question..." disabled className="w-full text-sm border border-slate-200 rounded-lg p-3 outline-none bg-gray-50 focus:border-indigo-400" />
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Flashcards & Study Plan */}
        <div className="space-y-6">
          
          {/* Active Recall / Flashcards */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-center">
              <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <LayoutList className="w-4 h-4 text-slate-500" /> Spaced Repetition Due
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {loadingFlashcards ? (
                  <div className="p-4 text-center text-slate-500">Loading...</div>
                ) : flashcards.length === 0 ? (
                  <div className="p-4 text-center text-slate-500">Integration Required / No flashcards found</div>
                ) : flashcards.map(card => (
                  <div key={card.id} className="p-4 hover:bg-slate-50 transition-colors">
                    <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider mb-1">{card.topic || "Topic"}</p>
                    <p className="text-sm font-medium text-slate-800 line-clamp-2">{card.front}</p>
                    <div className="mt-3 flex justify-end">
                      <Button size="sm" variant="outline" className="text-xs h-7">Reveal</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
                <p className="text-xs text-slate-500">Integration Required: Track remaining cards</p>
              </div>
            </CardContent>
          </Card>

          {/* Adaptive Study Plan */}
          <Card className="border-amber-100 shadow-sm bg-gradient-to-br from-amber-50/50 to-white">
            <CardHeader className="pb-2 border-b border-amber-50">
              <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" /> Adaptive Study Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex gap-3">
                <div className="bg-amber-100 p-2 rounded-lg shrink-0 h-min">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900">Schedule Update</p>
                  <p className="text-xs text-amber-800/80 mt-0.5">Integration Required: Recommend schedule adjustments based on study data.</p>
                </div>
              </div>
              <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-xs">Accept Adjustment</Button>
            </CardContent>
          </Card>
          
          {/* Integrity Note */}
          <p className="text-center text-[10px] text-slate-400 px-4">
            AI assistance is designed to support learning and comprehension, not replace student work. Always verify academic claims.
          </p>

        </div>

      </div>
    </div>
  );
}
