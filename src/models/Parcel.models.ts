import { Schema, model, connect } from "mongoose";
import { TwoWheelerOrder } from "./types/TwoWheelerOrder.types";
import { ParcelOrder } from "./types/ParcelOrder.types";

const ParcelOrderSchema = new Schema<ParcelOrder>({
  pickupPincode: String,
  dropPincode: String,
  phone: String,
  description: String,
});

export default model<ParcelOrder>("Parcel", ParcelOrderSchema);
