import { Status } from '@shared/model/status';

export class Shipments {
  id: string;
  weight: number;
  price: number;
  originAddress: string;
  destinationAddress: string;
  createdAt: Date;
  deliveryDate: Date;
  updatedAt: Date;
  tracking: Status[];
  note: string;
  description: string;
  currentStatus: {};
}
