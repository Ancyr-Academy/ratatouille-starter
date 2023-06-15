import { IMealGateway } from "@ratatouille/modules/order/core/gateway/meal.gateway";
import { MealFactory } from "@ratatouille/modules/order/core/model/meal.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class InMemoryMealGateway implements IMealGateway {
  async getMeals(): Promise<OrderingDomainModel.Meal[]> {
    return [
      MealFactory.create({
        id: "entry-1",
        type: OrderingDomainModel.MealType.ENTRY,
        title: "Velouté de Carottes",
      }),
      MealFactory.create({
        id: "entry-2",
        type: OrderingDomainModel.MealType.ENTRY,
        requiredAge: 18,
        title: "Cake Jambon Olive",
      }),
      MealFactory.create({
        id: "main-course-1",
        type: OrderingDomainModel.MealType.MAIN_COURSE,
        title: "Riz au curry",
      }),
      MealFactory.create({
        id: "main-course-2",
        type: OrderingDomainModel.MealType.MAIN_COURSE,
        title: "Spaghettis à la bolognaise",
      }),
      MealFactory.create({
        id: "main-course-3",
        type: OrderingDomainModel.MealType.MAIN_COURSE,
        title: "Gratin de pommes de terres",
      }),
      MealFactory.create({
        id: "main-course-4",
        type: OrderingDomainModel.MealType.MAIN_COURSE,
        requiredAge: 18,
        title: "Boeuf Bourguignon",
      }),
      MealFactory.create({
        id: "dessert-1",
        type: OrderingDomainModel.MealType.DESSERT,
        title: "Fondant au chocolat",
      }),
      MealFactory.create({
        id: "dessert-2",
        type: OrderingDomainModel.MealType.DESSERT,
        title: "Flan au caramel",
      }),
      MealFactory.create({
        id: "dessert-3",
        type: OrderingDomainModel.MealType.DESSERT,
        requiredAge: 18,
        title: "Baba au rhum",
      }),
      MealFactory.create({
        id: "drink-1",
        type: OrderingDomainModel.MealType.DRINK,
        title: "Limonade",
      }),
      MealFactory.create({
        id: "drink-2",
        type: OrderingDomainModel.MealType.DRINK,
        requiredAge: 18,
        title: "Vin Rouge",
      }),
      MealFactory.create({
        id: "drink-3",
        type: OrderingDomainModel.MealType.DRINK,
        requiredAge: 18,
        title: "Champagne",
      }),
    ];
  }
}
