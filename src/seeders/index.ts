import Rate from "../models/Rate.models";

import config from "../config";

import {
  TwoWheelerRate,
  PackerMoversRate,
  ParcelRate,
  TrucksRate,
} from "./data";
import mongoose from "mongoose";

async function SeedData() {
  await Rate.deleteMany({});

  console.log("Seeding Data");

  return Rate.insertMany([
    TwoWheelerRate,
    PackerMoversRate,
    ParcelRate,
    TrucksRate,
  ]);
}

mongoose
  .connect(config.MONGO_URI)
  .then(SeedData)
  .then(() => {
    console.log("Data seeded");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
