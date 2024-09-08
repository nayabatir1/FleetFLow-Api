import { Schema, model } from "mongoose";
import { PackersMoversOrder } from "./types/PackersMovers.types";

const PackersMoversOrderSchema = new Schema<PackersMoversOrder>({
  pickupAddr: String,
  dropAddr: String,
  phone: String,
  description: String,
});

export default model<PackersMoversOrder>(
  "PackersMovers",
  PackersMoversOrderSchema
);
