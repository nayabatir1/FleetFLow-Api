import { Schema, model } from "mongoose";
import { Rate } from "./types/Rate.types";

const RateSchema = new Schema<Rate>({
  type: String,
  chargePerKg: Number,
  chargePerKm: Number,
});

RateSchema.index({ type: 1 });

export default model<Rate>("Rate", RateSchema);
