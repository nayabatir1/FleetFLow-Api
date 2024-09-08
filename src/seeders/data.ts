import { Rate } from "../models/types/Rate.types";

export const TwoWheelerRate: Rate = {
  type: "TwoWheelers",
  chargePerKg: 20,
  chargePerKm: 50,
};

export const TrucksRate: Rate = {
  type: "Trucks",
  chargePerKg: 100,
  chargePerKm: 500,
};

export const ParcelRate: Rate = {
  type: "Parcel",
  chargePerKg: 20,
  chargePerKm: 30,
};

export const PackerMoversRate: Rate = {
  type: "PackersMovers",
  chargePerKg: 100,
  chargePerKm: 200,
};
