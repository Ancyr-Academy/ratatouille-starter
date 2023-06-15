import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "@ratatouille/modules/store/store";
import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { chooseTable } from "@ratatouille/modules/order/core/usecases/choose-table.usecase";
import { invariant } from "@ratatouille/modules/shared/invariant";

export const useTable = () => {
  function assignTable(tableId: string) {
    setAssignedTableId(tableId);
  }

  function onNext() {
    invariant(assignedTableId !== null, "Table must be assigned");
    dispatch(chooseTable(assignedTableId!));
  }

  function onPrevious() {
    dispatch(orderingSlice.actions.setStep(OrderingDomainModel.Step.GUESTS));
  }

  function isSubmittable() {
    return assignedTableId !== null;
  }

  const dispatch = useAppDispatch();
  const [assignedTableId, setAssignedTableId] = useState<string | null>(null);
  const availableTables = useSelector(
    (state: AppState) => state.ordering.availableTables.data
  );

  return {
    assignTable,
    onNext,
    onPrevious,
    isSubmittable: isSubmittable(),
    availableTables,
    assignedTableId,
  };
};
