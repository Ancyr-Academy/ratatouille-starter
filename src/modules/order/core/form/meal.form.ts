// Assign entry
// Assign main course
// Assign dessert
// Assign drink
// Is Submittable

import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class MealForm {
  private isMealType(
    meal: OrderingDomainModel.Meal,
    type: OrderingDomainModel.MealType
  ) {
    return meal.type === type;
  }

  private hasRequiredAge(
    meal: OrderingDomainModel.Meal,
    guest: OrderingDomainModel.Guest
  ) {
    if (meal.requiredAge === null) {
      return true;
    }

    return guest.age >= meal.requiredAge;
  }

  getSelectableEntries(
    meals: OrderingDomainModel.Meal[],
    guest: OrderingDomainModel.Guest
  ) {
    return meals.filter(
      (meal) =>
        !(
          !this.isMealType(meal, OrderingDomainModel.MealType.ENTRY) ||
          !this.hasRequiredAge(meal, guest)
        )
    );
  }

  getSelectableMainCourses(
    meals: OrderingDomainModel.Meal[],
    guest: OrderingDomainModel.Guest
  ) {
    return meals.filter(
      (meal) =>
        !(
          !this.isMealType(meal, OrderingDomainModel.MealType.MAIN_COURSE) ||
          !this.hasRequiredAge(meal, guest)
        )
    );
  }

  getSelectableDesserts(
    meals: OrderingDomainModel.Meal[],
    guest: OrderingDomainModel.Guest
  ) {
    return meals.filter(
      (meal) =>
        !(
          !this.isMealType(meal, OrderingDomainModel.MealType.DESSERT) ||
          !this.hasRequiredAge(meal, guest)
        )
    );
  }

  getSelectableDrinks(
    meals: OrderingDomainModel.Meal[],
    guest: OrderingDomainModel.Guest
  ) {
    return meals.filter(
      (meal) =>
        !(
          !this.isMealType(meal, OrderingDomainModel.MealType.DRINK) ||
          !this.hasRequiredAge(meal, guest)
        )
    );
  }
}
