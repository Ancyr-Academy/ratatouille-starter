"use client";

import React from "react";
import { useSelector } from "react-redux";

import { GuestsSection } from "@ratatouille/modules/order/react/sections/guest/GuestsSection";
import { AppState } from "@ratatouille/modules/store/store";
import { OrderingStep } from "@ratatouille/modules/order/core/store/ordering.slice";
import { TableSection } from "@ratatouille/modules/order/react/sections/table/TableSection";
import { MealsSection } from "@ratatouille/modules/order/react/sections/meals/MealsSection";
import { SummarySection } from "@ratatouille/modules/order/react/sections/summary/SummarySection";
import { ReservedSection } from "@ratatouille/modules/order/react/sections/reserved/ReservedSection";

export const OrderPage: React.FC = () => {
  const step = useSelector((state: AppState) => state.ordering.step);

  return (
    <main>
      {step === OrderingStep.GUESTS && <GuestsSection />}
      {step === OrderingStep.TABLE && <TableSection />}
      {step === OrderingStep.MEALS && <MealsSection />}
      {step === OrderingStep.SUMMARY && <SummarySection />}
      {step === OrderingStep.RESERVED && <ReservedSection />}
    </main>
  );
};
