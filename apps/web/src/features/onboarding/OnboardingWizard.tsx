"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Mock State
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("US");
  const [interests, setInterests] = useState<string[]>([]);
  const [aiPreference, setAiPreference] = useState("balanced");

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleComplete = () => {
    // In a real app, this would call the API service to save user profile/preferences
    router.push("/dashboard");
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">👋</div>
            <h2 className="text-2xl font-bold">Welcome to Universal AI</h2>
            <p className="text-slate-500 max-w-sm mx-auto">
              Your personal digital assistant for life. Let's take a moment to set up your preferences so we can help you better.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 py-4">
            <h2 className="text-xl font-semibold mb-4">What language would you like to use?</h2>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="zh">中文</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 py-4">
            <h2 className="text-xl font-semibold mb-4">Which country are you currently in?</h2>
            <p className="text-sm text-slate-500 mb-4">This helps us format dates, currencies, and suggest relevant local information.</p>
            <select 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="LK">Sri Lanka</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 py-4">
            <h2 className="text-xl font-semibold mb-4">What are your main interests?</h2>
            <div className="flex flex-wrap gap-2">
              {['Learning', 'Career', 'Personal Productivity', 'Finance', 'Travel', 'Family', 'Business'].map(interest => (
                <Badge 
                  key={interest}
                  variant={interests.includes(interest) ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-1.5 px-3"
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4 py-4">
            <h2 className="text-xl font-semibold mb-4">How do you prefer the AI to respond?</h2>
            <div className="space-y-3">
              {[
                { id: 'concise', label: 'Concise', desc: 'Short, direct answers' },
                { id: 'balanced', label: 'Balanced', desc: 'Detailed but to the point' },
                { id: 'detailed', label: 'Detailed', desc: 'Comprehensive explanations' }
              ].map(pref => (
                <label key={pref.id} className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${aiPreference === pref.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                  <input 
                    type="radio" 
                    name="aipref" 
                    value={pref.id} 
                    checked={aiPreference === pref.id}
                    onChange={() => setAiPreference(pref.id)}
                    className="mt-1"
                  />
                  <div className="ml-3">
                    <div className="font-medium">{pref.label}</div>
                    <div className="text-sm text-slate-500">{pref.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
            <h2 className="text-2xl font-bold">You're all set!</h2>
            <p className="text-slate-500 max-w-sm mx-auto">
              Your personal platform is ready. We've configured everything based on your preferences.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-lg shadow-lg border-0">
        <CardHeader className="pb-0 pt-6 px-6">
          <div className="flex gap-1 mb-6">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full ${i < step ? 'bg-blue-600' : 'bg-slate-100'}`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-2">
          {renderStepContent()}
        </CardContent>
        <CardFooter className="px-8 pb-8 pt-4 flex justify-between">
          {step > 1 && step < totalSteps ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
          ) : (
            <div></div> // Spacer
          )}
          
          {step < totalSteps ? (
            <div className="flex gap-2">
              {step > 3 && <Button variant="ghost" onClick={() => setStep(step + 1)}>Skip</Button>}
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            </div>
          ) : (
            <Button className="w-full" size="lg" onClick={handleComplete}>Go to Dashboard</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
