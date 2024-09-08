import { Schema, model, connect } from "mongoose";
import { TwoWheelerOrder } from "./types/TwoWheelerOrder.types";

const TwoWheelerOrderSchema = new Schema<TwoWheelerOrder>({
  pickupAddr: String,
  dropAddr: String,
  phone: String,
  description: String,
});

export default model<TwoWheelerOrder>("TwoWheelers", TwoWheelerOrderSchema);
