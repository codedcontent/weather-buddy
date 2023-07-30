import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    timezone: {
      type: String,
    },
    weatherLocations: [
      {
        location: String,
        times: [String],
      },
    ],
    notificationSettings: {
      email: {
        enabled: {
          type: Boolean,
          default: true,
        },
        frequency: String, // Daily, Weekly, etc.
      },
      sms: {
        enabled: Boolean,
        frequency: String,
      },
      whatsApp: {
        enabled: Boolean,
        frequency: String,
      },
      pushNotifications: {
        enabled: Boolean,
        frequency: String,
      },
    },
    subscriptionPlan: {
      type: String,
      default: "free",
    },
    subscriptionExpiryDate: {
      type: Date,
    },
    lastLogin: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
