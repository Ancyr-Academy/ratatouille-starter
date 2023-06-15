import { IMealGateway } from "@ratatouille/modules/order/core/gateway/meal.gateway";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class InMemoryMealGateway implements IMealGateway {
  async getMeals(): Promise<OrderingDomainModel.Meal[]> {
    return [];
  }
}
