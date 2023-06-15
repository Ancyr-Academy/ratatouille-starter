import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class MealFactory {
  static create(
    data?: Partial<OrderingDomainModel.Meal>
  ): OrderingDomainModel.Meal {
    return {
      id: "1",
      title: "Pizza",
      type: OrderingDomainModel.MealType.ENTRY,
      requiredAge: null,
      ...data,
    };
  }
}
