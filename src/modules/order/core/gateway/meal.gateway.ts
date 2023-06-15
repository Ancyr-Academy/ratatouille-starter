import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export interface IMealGateway {
  getMeals(): Promise<OrderingDomainModel.Meal[]>;
}
