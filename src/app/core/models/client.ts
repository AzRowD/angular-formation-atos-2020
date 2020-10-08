import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';
export class Client implements ClientI{

  state = StateClient.ACTIVE;
  id: number;
  name: string;
  totalCaHt = 0;
  tva = 20;
  comment: string;

constructor(obj?: Partial<Client>) {
  if (obj) {
    Object.assign(this, obj);
  }
}

}
