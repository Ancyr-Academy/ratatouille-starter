import { nanoid } from "nanoid";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { IIDProvider } from "@ratatouille/modules/core/id-provider";

export class GuestForm {
  constructor(private idProvider: IIDProvider) {}

  addGuest(state: OrderingDomainModel.Guest[]) {
    return [
      ...state,
      {
        id: this.idProvider.generate(),
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ];
  }
}
