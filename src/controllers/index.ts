import { Request, Response } from "express";
import status from "http-status";
import {
  IPackerMoversPayload,
  IParcelPayload,
  ITrucksPayload,
  ITwoWheelerPayload,
} from "../validations/types";
import { CalculateDistance } from "../Utils";

import RateModels from "../models/Rate.models";
import TwoWheelerOrderModels from "../models/TwoWheelerOrder.models";
import TruckModels from "../models/Truck.models";
import PackerMoversModels from "../models/PackerMovers.models";
import sanitizedConfig from "../config";
import { GoogleResponse } from "./GoogleResponse.types";
import ParcelModels from "../models/Parcel.models";

export async function TwoWheelers(
  { body }: Request<{}, {}, ITwoWheelerPayload>,
  res: Response
) {
  const rate = await RateModels.findOne({ type: "TwoWheelers" }).lean();

  if (!rate) throw new Error("Rate not found");

  await TwoWheelerOrderModels.create(body);

  const distance = CalculateDistance(
    body.pickupLat,
    body.pickupLng,
    body.dropLat,
    body.dropLng
  );

  const weight = 20;

  const priceMin = Math.round(
    rate.chargePerKm * distance + weight * rate.chargePerKg
  );

  const priceMax = Math.round(1.3 * priceMin);

  res
    .status(status.OK)
    .json({ message: "success", data: { priceMin, priceMax, weight } });
}

export async function Trucks(
  { body }: Request<{}, {}, ITrucksPayload>,
  res: Response
) {
  const rate = await RateModels.findOne({ type: "Trucks" }).lean();

  if (!rate) throw new Error("Rate not found");

  const distance = CalculateDistance(
    body.pickupLat,
    body.pickupLng,
    body.dropLat,
    body.dropLng
  );

  const resp: Record<string, Record<string, number>> = {
    tata407: {
      weight: 1500,
    },
    pickup: {
      weight: 1250,
    },
    dieselAuto: {
      weight: 500,
    },
    tataAce: {
      weight: 750,
    },
  };

  resp.tata407.priceMin = Math.round(
    rate.chargePerKm * distance + resp.tata407.weight * rate.chargePerKg
  );
  resp.tata407.priceMax = Math.round(1.3 * resp.tata407.priceMin);

  resp.pickup.priceMin = Math.round(
    rate.chargePerKm * distance + resp.pickup.weight * rate.chargePerKg
  );
  resp.pickup.priceMax = Math.round(1.3 * resp.pickup.priceMin);

  resp.dieselAuto.priceMin = Math.round(
    rate.chargePerKm * distance + resp.dieselAuto.weight * rate.chargePerKg
  );
  resp.dieselAuto.priceMax = Math.round(1.3 * resp.dieselAuto.priceMin);

  resp.tataAce.priceMin = Math.round(
    rate.chargePerKm * distance + resp.tataAce.weight * rate.chargePerKg
  );
  resp.tataAce.priceMax = Math.round(1.3 * resp.tataAce.priceMin);

  await TruckModels.create(body);

  res.status(status.OK).json({ message: "success", data: resp });
}

export async function PackersMovers(
  { body }: Request<{}, {}, IPackerMoversPayload>,
  res: Response
) {
  await PackerMoversModels.create(body);

  res.status(status.OK).json({ message: "success" });
}

export async function Parcel(
  { body }: Request<{}, {}, IParcelPayload>,
  res: Response
) {
  const rate = await RateModels.findOne({ type: "Parcel" }).lean();

  if (!rate) throw new Error("Rate not found");

  const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json";

  const param1 = new URLSearchParams();
  const param2 = new URLSearchParams();

  param1.append("address", body.pickupPincode);
  param1.append("key", sanitizedConfig.GOOGLE_API_KEY);

  param2.append("address", body.dropPincode);
  param2.append("key", sanitizedConfig.GOOGLE_API_KEY);

  const [add1, add2] = await Promise.all([
    fetch(GOOGLE_API.concat("?", param1.toString())).then(
      (res) => res.json() as Promise<GoogleResponse>
    ),
    fetch(GOOGLE_API.concat("?", param2.toString())).then(
      (res) => res.json() as Promise<GoogleResponse>
    ),
  ]);

  const [result1] = add1.results;
  const [result2] = add2.results;

  const distance = CalculateDistance(
    result1.geometry.location.lat,
    result2.geometry.location.lng,
    result2.geometry.location.lat,
    result2.geometry.location.lng
  );

  const price = Math.round(
    rate.chargePerKg * body.weight + rate.chargePerKm * distance
  );

  await ParcelModels.create(body);

  res.status(status.OK).json({ message: "success", data: { price } });
}
