import { useSelector } from "react-redux";

import { useAppDispatch } from "@ratatouille/modules/store/store";
import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { reserve } from "@ratatouille/modules/order/core/usecases/reserve.usecase";
import { selectSummary } from "@ratatouille/modules/order/core/selectors/summary.selector";

export const useSummary = () => {
  function onNext() {
    dispatch(reserve());
  }

  function onPrevious() {
    dispatch(orderingSlice.actions.setStep(OrderingDomainModel.Step.MEALS));
  }

  const dispatch = useAppDispatch();
  const summary = useSelector(selectSummary);

  return {
    onNext,
    onPrevious,
    summary,
  };
};
