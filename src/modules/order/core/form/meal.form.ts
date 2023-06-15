// Get selectable main courses
// Get selectable desserts
// Get selectable drinks
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
}
