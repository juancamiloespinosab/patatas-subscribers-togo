export interface Permission {
  M: string;
  D: string;
}

export interface Feature {
  M: string;
  F: string;
}

export interface Preference {
  PreferenceKey: string;
  PreferenceValue: string;
}

export interface User {
  Status: number;
  Token: string;
  Message?: any;
  TwoFactorType?: any;
  AllowedTwoFactorTypes?: any;
  Permissions: Permission[];
  Features: Feature[];
  Locations: any[];
  LastLocationId: number;
  Preferences: Preference[];
  UserType: string;
  Email: string;
  FirstName: string;
  LastName: string;
  CompanyName: string;
  TimeZoneInfo?: any;
  RefreshToken: string;
}
