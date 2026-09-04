/**
 * Country Configuration Registry
 * 
 * Manages localization formats, local services, and regional settings.
 */

export interface CountryConfig {
  code: string;
  name: string;
  currency: {
    code: string;
    symbol: string;
  };
  formats: {
    date: string;
    time: string; // 12h or 24h
  };
  emergencyServices?: {
    police: string;
    ambulance: string;
    fire: string;
  };
}

export const COUNTRY_REGISTRY: Record<string, CountryConfig> = {
  US: {
    code: "US",
    name: "United States",
    currency: { code: "USD", symbol: "$" },
    formats: { date: "MM/DD/YYYY", time: "12h" },
    emergencyServices: { police: "911", ambulance: "911", fire: "911" }
  },
  UK: {
    code: "UK",
    name: "United Kingdom",
    currency: { code: "GBP", symbol: "£" },
    formats: { date: "DD/MM/YYYY", time: "24h" },
    emergencyServices: { police: "999", ambulance: "999", fire: "999" }
  },
  IN: {
    code: "IN",
    name: "India",
    currency: { code: "INR", symbol: "₹" },
    formats: { date: "DD/MM/YYYY", time: "12h" },
    emergencyServices: { police: "100", ambulance: "102", fire: "101" }
  }
};

export const getCountryConfig = (countryCode: string): CountryConfig => {
  return COUNTRY_REGISTRY[countryCode] || COUNTRY_REGISTRY["US"];
};
