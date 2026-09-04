"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful → redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Invalid email or password. Please try again.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">U</div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2 text-sm">Log in to your Universal Human AI account</p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="you@example.com"
              required
              disabled={loading}
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
              <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline font-medium">Forgot password?</Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 text-base font-medium"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
          Don&apos;t have an account? <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
