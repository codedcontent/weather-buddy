export type TWeatherAlertTimes = "5:00 AM" | "12:00 AM" | "4:00 PM" | "8:00 PM";

export type CustomTextFieldProps = {
  error: string | undefined;
  label: string;
  touched: boolean | undefined;
};

export type CustomButtonProps = {
  fullWidth?: boolean;
  variant: "filled" | "outlined";
  onClick?: () => void;
  label: string;
  loading?: boolean;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type TAccountDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type TLocation = {
  title: string;
  coord: {
    lat: number;
    long: number;
  };
};

export type TSingleWeatherAlert = {
  weatherAlertId: string;
  location: TLocation;
  times: TWeatherAlertTimes[];
};

export type TWeatherAlert = {
  id: string;
  location: TLocation;
  times: TWeatherAlertTimes[];
};

export type TWeatherAlerts = TSingleWeatherAlert[];

export type TNotifications = {
  email: { enabled?: boolean; frequency?: string };
  sms: { enabled?: boolean; frequency?: string };
  whatsApp: { enabled?: boolean; frequency?: string };
  pushNotifications: { enabled?: boolean; frequency?: string };
};

export type TSubscriptionPlans = "free" | "standard" | "premium";

export type TSubscriptionDetails = {
  plan: TSubscriptionPlans;
  expDate: Date;
};

export type TUserState = {
  id: string;
  accountDetails: TAccountDetails;
  weatherAlerts: TWeatherAlerts;
  notifications: TNotifications;
  subscriptionDetails: TSubscriptionDetails;
};

export type TNotificationType = {
  sms: boolean;
  email: boolean;
  whatsApp: boolean;
  pushNotifications: boolean;
};

export type TSubscriptionOption = {
  id: number;
  name: string;
  description: string;
  features: string[];
  badge?: { title: string; color: "primary" | "new" };
  price: number;
};

export type TSubscriptionType = "free" | "pro" | "enterprise";
