import { produce } from "immer";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { IIDProvider } from "@ratatouille/modules/core/id-provider";

export class GuestForm {
  constructor(private idProvider: IIDProvider) {}

  addGuest(state: OrderingDomainModel.Form) {
    return produce(state, (draft) => {
      draft.guests.push({
        id: this.idProvider.generate(),
        firstName: "John",
        lastName: "Doe",
        age: 0,
      });
    });
  }

  removeGuest(state: OrderingDomainModel.Form, id: string) {
    return produce(state, (draft) => {
      const index = draft.guests.findIndex((guest) => guest.id === id);
      if (index < 0) {
        return;
      }

      draft.guests.splice(index, 1);
    });
  }

  changeOrganizer(state: OrderingDomainModel.Form, id: string) {
    return produce(state, (draft) => {
      const exists = draft.guests.some((guest) => guest.id === id);
      draft.organizerId = exists ? id : null;
    });
  }

  isSubmittable(state: OrderingDomainModel.Form) {
    return state.organizerId !== null;
  }

  updateGuest<T extends keyof OrderingDomainModel.Guest>(
    state: OrderingDomainModel.Form,
    id: string,
    key: T,
    value: OrderingDomainModel.Guest[T]
  ) {
    return produce(state, (draft) => {
      const guest = draft.guests.find((guest) => guest.id === id);
      if (!guest) {
        return;
      }

      guest[key] = value;
    });
  }
}
