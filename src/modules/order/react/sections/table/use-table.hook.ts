import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { TableFactory } from "@ratatouille/modules/order/core/model/table.factory";
import { useState } from "react";

export const useTable = () => {
  function assignTable(tableId: string) {
    setAssignedTableId(tableId);
  }

  function onNext() {}

  function onPrevious() {}

  function isSubmittable() {
    return false;
  }

  const [assignedTableId, setAssignedTableId] = useState<string | null>(null);

  const availableTables: OrderingDomainModel.Table[] = [
    TableFactory.create(),
    TableFactory.create({
      id: "table-2",
      title: "Centre de la pièce",
    }),
  ];

  return {
    assignTable,
    onNext,
    onPrevious,
    isSubmittable: isSubmittable(),
    availableTables,
    assignedTableId,
  };
};
