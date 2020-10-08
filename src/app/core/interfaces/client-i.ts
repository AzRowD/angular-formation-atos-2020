import { StateClient } from '../enums/state-client.enum';
export interface ClientI {
  state: StateClient;
  id: number;
  name: string;
  totalCaHt: number;
  tva: number;
  comment: string;
}
