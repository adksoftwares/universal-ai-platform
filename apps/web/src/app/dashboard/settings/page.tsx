"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, updateProfile, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useUserPreferences } from "@/lib/UserPreferencesContext";
import { COUNTRY_DATA } from "@/lib/countryData";

export default function SettingsPage() {
  const { preferences, setCountry } = useUserPreferences();
  const [user, setUser] = useState<any>(null);
  const [displayName, setDisplayName] = useState("");
  const [nameSuccess, setNameSuccess] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameLoading, setNameLoading] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwLoading, setPwLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setDisplayName(u?.displayName ?? "");
    });
    return unsub;
  }, []);

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameSuccess(""); setNameError(""); setNameLoading(true);
    try {
      await updateProfile(user, { displayName });
      setNameSuccess("Name updated successfully!");
    } catch {
      setNameError("Failed to update name. Please try again.");
    } finally {
      setNameLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwSuccess(""); setPwError(""); setPwLoading(true);
    if (newPassword.length < 8) {
      setPwError("New password must be at least 8 characters.");
      setPwLoading(false);
      return;
    }
    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setPwSuccess("Password updated successfully!");
      setCurrentPassword(""); setNewPassword("");
    } catch (err: any) {
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setPwError("Current password is incorrect.");
      } else {
        setPwError("Failed to update password. Please try again.");
      }
    } finally {
      setPwLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account preferences</p>
      </div>

      {/* Account Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Account Information</h2>
        <div className="mb-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
          <span className="font-medium text-slate-700">Email: </span>{user?.email ?? "—"}
        </div>
        <form onSubmit={handleUpdateName} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="Your name"
              required
              disabled={nameLoading}
            />
          </div>
          {nameSuccess && <p className="text-sm text-green-600 font-medium">✓ {nameSuccess}</p>}
          {nameError && <p className="text-sm text-red-600">{nameError}</p>}
          <Button type="submit" disabled={nameLoading} className="w-full sm:w-auto">
            {nameLoading ? "Saving..." : "Save Name"}
          </Button>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              required
              disabled={pwLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              required
              disabled={pwLoading}
            />
            <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
          </div>
          {pwSuccess && <p className="text-sm text-green-600 font-medium">✓ {pwSuccess}</p>}
          {pwError && <p className="text-sm text-red-600">{pwError}</p>}
          <Button type="submit" disabled={pwLoading} className="w-full sm:w-auto">
            {pwLoading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>

      {/* Regional Preferences */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Regional Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
            <select
              value={preferences.countryCode}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
            >
              {Object.entries(COUNTRY_DATA).map(([code, data]) => (
                <option key={code} value={code}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Currency</p>
              <p className="text-sm font-medium text-slate-900">{preferences.currency} ({preferences.currencySymbol})</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Timezone</p>
              <p className="text-sm font-medium text-slate-900">{preferences.timezone}</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Emergency</p>
              <p className="text-sm font-medium text-slate-900">{preferences.emergencyNumber}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Updating your country will automatically adjust your local currency, timezone, and emergency numbers across the Universal Human AI platform.
          </p>
        </div>
      </div>
    </div>
  );
}
