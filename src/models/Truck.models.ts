import { Schema, model } from "mongoose";
import { TruckOrder } from "./types/TrucksOrder.types";

const TruckOrderSchema = new Schema<TruckOrder>({
  pickupAddr: String,
  dropAddr: String,
  phone: String,
  description: String,
});

export default model<TruckOrder>("Truck", TruckOrderSchema);
