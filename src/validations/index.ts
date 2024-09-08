import * as Joi from "joi";
import { IParcelPayload, ITrucksPayload, ITwoWheelerPayload } from "./types";

export const TwoWheelerPayload = Joi.object<ITwoWheelerPayload, true>().keys({
  pickupAddr: Joi.string().required(),
  dropAddr: Joi.string().required(),
  phone: Joi.string().required(),
  description: Joi.string().required(),
  pickupLat: Joi.number().required(),
  pickupLng: Joi.number().required(),
  dropLat: Joi.number().required(),
  dropLng: Joi.number().required(),
});

export const TrucksPayload = Joi.object<ITrucksPayload, true>().keys({
  pickupAddr: Joi.string().required(),
  dropAddr: Joi.string().required(),
  phone: Joi.string().required(),
  description: Joi.string().required(),
  pickupLat: Joi.number().required(),
  pickupLng: Joi.number().required(),
  dropLat: Joi.number().required(),
  dropLng: Joi.number().required(),
});

export const PackersMoversPayload = Joi.object<ITrucksPayload, true>().keys({
  pickupAddr: Joi.string().required(),
  dropAddr: Joi.string().required(),
  phone: Joi.string().required(),
  description: Joi.string().required(),
  pickupLat: Joi.number().required(),
  pickupLng: Joi.number().required(),
  dropLat: Joi.number().required(),
  dropLng: Joi.number().required(),
});

export const ParckelPayload = Joi.object<IParcelPayload>().keys({
  pickupPincode: Joi.string().required(),
  dropPincode: Joi.string().required(),
  phone: Joi.string().required(),
  description: Joi.string().required(),
  weight: Joi.number().required(),
  pickupLat: Joi.number().required(),
  pickupLng: Joi.number().required(),
  dropLat: Joi.number().required(),
  dropLng: Joi.number().required(),
});
