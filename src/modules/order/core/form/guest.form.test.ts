// Ajouter un guest
// Retirer un guest

import { IIDProvider } from "@ratatouille/modules/core/id-provider";
import { GuestForm } from "@ratatouille/modules/order/core/form/guest.form";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

class StubIDProvider implements IIDProvider {
  generate(): string {
    return "1";
  }
}

const idProvider = new StubIDProvider();

const emptyInitialState: OrderingDomainModel.Form = {
  guests: [],
  organizerId: null,
};

const stateWithOneUser: OrderingDomainModel.Form = {
  guests: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 0,
    },
  ],
  organizerId: null,
};

const stateWithTwoUsers: OrderingDomainModel.Form = {
  guests: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 0,
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Doe",
      age: 0,
    },
  ],
  organizerId: null,
};

const form = new GuestForm(idProvider);

describe("Add a guest", () => {
  it("should add a guest", () => {
    const state = form.addGuest(emptyInitialState);
    expect(state.guests).toEqual([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ]);
  });

  it("should add a guest when there's already one", () => {
    const state = form.addGuest(stateWithOneUser);
    expect(state.guests).toEqual([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ]);
  });

  it("should add a guest when there's already two", () => {
    const state = form.addGuest(stateWithTwoUsers);
    expect(state.guests).toEqual([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
      {
        id: "2",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ]);
  });
});

describe("Removing a guest", () => {
  it("when there is no user, the remove should do nothing", () => {
    const state = form.removeGuest(emptyInitialState, "1");
    expect(state.guests).toEqual([]);
  });

  it("when there is a user with ID 1, the user with ID 1 should be removed", () => {
    const state = form.removeGuest(stateWithOneUser, "1");
    expect(state.guests).toEqual([]);
  });

  it("when there's two users, only the user with ID 1 should be removed", () => {
    const state = form.removeGuest(stateWithTwoUsers, "1");
    expect(state.guests).toEqual([
      {
        id: "2",
        firstName: "John",
        lastName: "Doe",
        age: 0,
      },
    ]);
  });
});

describe("Add an organizer", () => {
  it("set organizer ID when the user does not exist", () => {
    const state = form.changeOrganizer(emptyInitialState, "1");
    expect(state.organizerId).toEqual(null);
  });

  it("set organizer ID when the user exists", () => {
    const state = form.changeOrganizer(stateWithOneUser, "1");
    expect(state.organizerId).toEqual("1");
  });
});

describe("Is Submittable", () => {
  it("when no guest is an organizer, it should not be submittable", () => {
    const isSubmittable = form.isSubmittable(emptyInitialState);
    expect(isSubmittable).toEqual(false);
  });

  it("when one guest is an organizer, it should be submittable", () => {
    const withOrganizerState = {
      ...stateWithOneUser,
      organizerId: "1",
    };

    const isSubmittable = form.isSubmittable(withOrganizerState);
    expect(isSubmittable).toEqual(true);
  });
});
