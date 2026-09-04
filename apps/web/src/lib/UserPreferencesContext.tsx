"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { COUNTRY_DATA } from "./countryData";

interface UserPreferences {
  countryCode: string;
  currency: string;
  currencySymbol: string;
  timezone: string;
  emergencyNumber: string;
}

interface UserPreferencesContextType {
  preferences: UserPreferences;
  setCountry: (countryCode: string) => void;
}

const defaultPreferences: UserPreferences = {
  countryCode: "US",
  currency: "USD",
  currencySymbol: "$",
  timezone: "America/New_York",
  emergencyNumber: "911",
};

const UserPreferencesContext = createContext<UserPreferencesContextType>({
  preferences: defaultPreferences,
  setCountry: () => {},
});

export const useUserPreferences = () => useContext(UserPreferencesContext);

export const UserPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("user_preferences");
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  const setCountry = (code: string) => {
    const data = COUNTRY_DATA[code];
    if (data) {
      const newPrefs = {
        countryCode: code,
        currency: data.currency,
        currencySymbol: data.symbol,
        timezone: data.timezone,
        emergencyNumber: data.emergency,
      };
      setPreferences(newPrefs);
      localStorage.setItem("user_preferences", JSON.stringify(newPrefs));
    }
  };

  if (!isLoaded) return null;

  return (
    <UserPreferencesContext.Provider value={{ preferences, setCountry }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
