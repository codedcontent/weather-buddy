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

export type AccountDetailFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type Location = {
  title: string;
  coord: {
    lat: number;
    long: number;
  };
};

export type WeatherAlertsProps = {
  weatherAlertId: string;
  location: Location;
  times: string[];
}[];

export type WeatherAlertTimes = "5:00 AM" | "12:00 AM" | "4:00 PM" | "8:00 PM";

export type NotificationsType = {
  email: { enabled?: boolean; frequency?: string };
  sms: { enabled?: boolean; frequency?: string };
  whatsApp: { enabled?: boolean; frequency?: string };
  pushNotifications: { enabled?: boolean; frequency?: string };
};

export type TSubscriptionPlans = "free" | "standard" | "premium";

export type TUserState = {
  id: string;
  accountDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  weatherAlerts: WeatherAlertsProps;
  notifications: NotificationsType;
  subscriptionDetails: {
    plan: TSubscriptionPlans;
    expDate: Date;
  };
};
