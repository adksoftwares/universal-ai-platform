"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { useUserPreferences } from "@/lib/UserPreferencesContext";
import { COUNTRY_DATA } from "@/lib/countryData";

export default function SignupPage() {
  const router = useRouter();
  const { setCountry } = useUserPreferences();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setSelectedCountry] = useState("US");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      // Update global context state
      setCountry(country);

      // Show success message, then redirect to login after 2 seconds
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered. Please log in.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Please use a stronger password.");
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
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mt-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">U</div>
          <h1 className="text-2xl font-bold text-slate-900">Create an Account</h1>
          <p className="text-slate-500 mt-2 text-sm">Join Universal Human AI today</p>
        </div>

        {/* Success Banner */}
        {success && (
          <div className="mb-5 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm font-medium">
            <span className="text-green-500 text-lg">✅</span>
            Account created successfully! Redirecting...
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="Jane Doe"
              required
              disabled={loading || success}
            />
          </div>
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
              disabled={loading || success}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
              disabled={loading || success}
            >
              {Object.entries(COUNTRY_DATA).map(([code, data]) => (
                <option key={code} value={code}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              required
              disabled={loading || success}
            />
            <p className="text-xs text-slate-500 mt-2">Must be at least 8 characters long</p>
          </div>

          <Button
            type="submit"
            className="w-full h-11 text-base font-medium mt-2"
            disabled={loading || success}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
          By signing up, you agree to our <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </div>
        <div className="mt-4 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}
