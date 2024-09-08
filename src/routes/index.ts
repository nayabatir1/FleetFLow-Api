import express from "express";

import { PackersMovers, Parcel, Trucks, TwoWheelers } from "../controllers";
import { validate } from "../middleware";
import {
  PackersMoversPayload,
  ParckelPayload,
  TrucksPayload,
  TwoWheelerPayload,
} from "../validations";
import {
  IPackerMoversPayload,
  IParcelPayload,
  ITrucksPayload,
  ITwoWheelerPayload,
} from "../validations/types";

const router = express.Router();

router.post<{}, {}, ITwoWheelerPayload>(
  "/two-wheelers",
  validate(TwoWheelerPayload),
  TwoWheelers
);

router.post<{}, {}, ITrucksPayload>("/trucks", validate(TrucksPayload), Trucks);

router.post<{}, {}, IParcelPayload>(
  "/parcels",
  validate(ParckelPayload),
  Parcel
);

router.post<{}, {}, IPackerMoversPayload>(
  "/packers-movers",
  validate(PackersMoversPayload),
  PackersMovers
);

export default router;
