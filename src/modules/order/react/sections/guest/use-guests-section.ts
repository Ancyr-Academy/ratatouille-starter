import { useRef, useState } from "react";
import { useDependencies } from "@ratatouille/modules/app/react/DependenciesProvider";
import { GuestForm } from "@ratatouille/modules/order/core/form/guest.form";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { AppState, useAppDispatch } from "@ratatouille/modules/store/store";
import { chooseGuests } from "@ratatouille/modules/order/core/usecases/choose-guests.usecase";
import { useSelector } from "react-redux";
import { selectForm } from "@ratatouille/modules/order/core/selectors/form.selector";

export const useGuestsSection = () => {
  function addGuest() {
    const newState = guestForm.current.addGuest(form);
    setForm(newState);
  }

  function removeGuest(id: string) {
    const newState = guestForm.current.removeGuest(form, id);
    setForm(newState);
  }

  function updateGuest<T extends keyof OrderingDomainModel.Guest>(
    id: string,
    key: T,
    value: OrderingDomainModel.Guest[T]
  ) {
    const newState = guestForm.current.updateGuest(form, id, key, value);
    setForm(newState);
  }

  function changeOrganizer(id: string) {
    const newState = guestForm.current.changeOrganizer(form, id);
    setForm(newState);
  }

  function onNext() {
    dispatch(chooseGuests(form));
  }

  function isSubmittable() {
    return guestForm.current.isSubmittable(form);
  }

  const initialForm = useSelector(selectForm);

  const dispatch = useAppDispatch();
  const { idProvider } = useDependencies();
  const guestForm = useRef(new GuestForm(idProvider));
  const [form, setForm] = useState<OrderingDomainModel.Form>(initialForm);

  return {
    addGuest,
    removeGuest,
    updateGuest,
    changeOrganizer,
    onNext,
    isSubmittable: isSubmittable(),
    form,
  };
};
