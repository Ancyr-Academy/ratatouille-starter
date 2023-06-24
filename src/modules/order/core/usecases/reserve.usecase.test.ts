import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { FailingReservationGateway } from "@ratatouille/modules/order/core/testing/failing.reservation-gateway";
import { MockReservationGateway } from "@ratatouille/modules/order/core/testing/mock.reservation-gateway";
import { reserve } from "@ratatouille/modules/order/core/usecases/reserve.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";

const orderForm: OrderingDomainModel.Form = {
  organizerId: "1",
  tableId: "1",
  guests: [
    GuestFactory.create({
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 21,
      meals: {
        entry: null,
        mainCourse: "1",
        dessert: null,
        drink: null,
      },
    }),
  ],
};

const orderingState: OrderingDomainModel.State = {
  step: OrderingDomainModel.Step.SUMMARY,
  form: orderForm,
  availableMeals: {
    status: "idle",
    error: null,
    data: [],
  },
  availableTables: {
    status: "idle",
    error: null,
    data: [],
  },
  reservation: {
    status: "idle",
  },
};

describe("Reserve", () => {
  it("should reserve successfully", async () => {
    const reservationGateway = new MockReservationGateway();
    const store = createTestStore({
      initialState: {
        ordering: orderingState,
      },
      dependencies: {
        reservationGateway,
      },
    });

    const promise = store.dispatch(reserve());
    expect(store.getState().ordering.reservation.status).toEqual("loading");
    await promise;
    expect(store.getState().ordering.reservation.status).toEqual("success");

    reservationGateway.expectReserveWasCalledWith({
      tableId: "1",
      guests: [
        {
          firstName: "John",
          lastName: "Doe",
          age: 21,
          isOrganizer: true,
          meals: {
            entry: null,
            mainCourse: "1",
            dessert: null,
            drink: null,
          },
        },
      ],
    });

    expect(store.getState().ordering.step).toEqual(
      OrderingDomainModel.Step.RESERVED
    );
  });

  it("should fail to reserve", async () => {
    const reservationGateway = new FailingReservationGateway();
    const store = createTestStore({
      initialState: {
        ordering: orderingState,
      },
      dependencies: {
        reservationGateway,
      },
    });

    const promise = store.dispatch(reserve());
    expect(store.getState().ordering.reservation.status).toEqual("loading");
    await promise;
    expect(store.getState().ordering.reservation.status).toEqual("error");
    expect((store.getState().ordering.reservation as any).error).toEqual(
      "Reservation failed"
    );
  });
});
