import mongoose from "mongoose";

export const weatherAlertSchema = new mongoose.Schema({
  location: {
    title: {
      type: String,
      required: true,
    },
    coord: {
      lat: {
        type: String,
        required: true,
      },
      long: {
        type: String,
        required: true,
      },
    },
  },
  times: [String],
});

const WeatherAlert =
  mongoose.models.weatherAlert ||
  mongoose.model("weatherAlert", weatherAlertSchema);

export default WeatherAlert;
