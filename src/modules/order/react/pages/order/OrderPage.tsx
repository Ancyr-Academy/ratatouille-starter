"use client";

import React from "react";
import { useSelector } from "react-redux";

import { GuestsSection } from "@ratatouille/modules/order/react/sections/guest/GuestsSection";
import { TableSection } from "@ratatouille/modules/order/react/sections/table/TableSection";
import { MealsSection } from "@ratatouille/modules/order/react/sections/meals/MealsSection";
import { SummarySection } from "@ratatouille/modules/order/react/sections/summary/SummarySection";
import { ReservedSection } from "@ratatouille/modules/order/react/sections/reserved/ReservedSection";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { selectStep } from "@ratatouille/modules/order/core/selectors/step.selector";

export const OrderPage: React.FC = () => {
  const step = useSelector(selectStep);

  return (
    <main>
      {step === OrderingDomainModel.Step.GUESTS && <GuestsSection />}
      {step === OrderingDomainModel.Step.TABLE && <TableSection />}
      {step === OrderingDomainModel.Step.MEALS && <MealsSection />}
      {step === OrderingDomainModel.Step.SUMMARY && <SummarySection />}
      {step === OrderingDomainModel.Step.RESERVED && <ReservedSection />}
    </main>
  );
};
