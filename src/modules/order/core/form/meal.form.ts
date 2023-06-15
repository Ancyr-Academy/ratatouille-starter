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
  getSelectableEntries(
    meals: OrderingDomainModel.Meal[],
    guest: OrderingDomainModel.Guest
  ) {
    return meals.filter((meal) => {
      if (meal.type !== OrderingDomainModel.MealType.ENTRY) {
        return false;
      }

      if (meal.requiredAge && guest.age < meal.requiredAge) {
        return false;
      }

      return true;
    });
  }
}
