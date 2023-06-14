import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { useState } from "react";

export const useGuestsSection = () => {
  function addGuest() {
    setGuests((guests) => [
      ...guests,
      {
        id: Math.random().toString(),
        firstName: "",
        lastName: "",
        age: 0,
      },
    ]);
  }

  function removeGuest(id: string) {
    setGuests((guests) => guests.filter((guest) => guest.id !== id));
  }

  function updateGuest(id: string, key: string, value: any) {}

  function changeOrganizer() {}

  function onNext() {}

  function isSubmittable() {
    return false;
  }

  const [guests, setGuests] = useState<OrderingDomainModel.Guest[]>([]);

  return {
    addGuest,
    removeGuest,
    updateGuest,
    changeOrganizer,
    onNext,
    isSubmittable: isSubmittable(),
    guests,
  };
};
