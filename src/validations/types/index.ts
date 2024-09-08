export interface ITwoWheelerPayload {
  pickupAddr: string;
  dropAddr: string;
  phone: string;
  description: string;
  pickupLat: number;
  pickupLng: number;
  dropLat: number;
  dropLng: number;
}

export interface ITrucksPayload {
  pickupAddr: string;
  dropAddr: string;
  phone: string;
  description: string;
  pickupLng: number;
  pickupLat: number;
  dropLat: number;
  dropLng: number;
}

export interface IPackerMoversPayload {
  pickupAddr: string;
  dropAddr: string;
  phone: string;
  description: string;
  pickupLng: number;
  pickupLat: number;
  dropLat: number;
  dropLng: number;
}

export interface IParcelPayload {
  pickupPincode: string;
  dropPincode: string;
  phone: string;
  description: string;
  weight: number;
  pickupLat: number;
  pickupLng: number;
  dropLat: number;
  dropLng: number;
}
