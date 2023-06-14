import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class GuestForm {
  addGuest(state: OrderingDomainModel.Guest[]) {
    return [
      ...state,
      {
        id:
          state.length === 0
            ? "1"
            : (parseInt(state[state.length - 1].id) + 1).toString(),
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ];
  }
}
