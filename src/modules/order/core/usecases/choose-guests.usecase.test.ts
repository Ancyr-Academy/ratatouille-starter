import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { chooseGuests } from "@ratatouille/modules/order/core/usecases/choose-guests.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";

describe("Choose guests", () => {
  it("should choose the guests", async () => {
    const store = createTestStore();
    const form: OrderingDomainModel.Form = {
      guests: [
        GuestFactory.create({
          id: "1",
        }),
      ],
      organizerId: null,
      tableId: null,
    };

    await store.dispatch(chooseGuests(form));

    expect(store.getState().ordering.form).toEqual(form);
    expect(store.getState().ordering.step).toEqual(
      OrderingDomainModel.Step.TABLE
    );
  });
});
