// Ajouter un guest
// Retirer un guest

import { GuestForm } from "@ratatouille/modules/order/core/form/guest.form";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

describe("Add a guest", () => {
  it("should add a guest", () => {
    const form = new GuestForm();
    const initialState: OrderingDomainModel.Guest[] = [];

    const state = form.addGuest(initialState);
    expect(state).toEqual([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ]);
  });
});
