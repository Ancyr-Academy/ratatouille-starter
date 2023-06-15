import { MealForm } from "@ratatouille/modules/order/core/form/meal.form";
import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory";
import { MealFactory } from "@ratatouille/modules/order/core/model/meal.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

const regularEntry = MealFactory.create({
  id: "entry-1",
  type: OrderingDomainModel.MealType.ENTRY,
});

const adultEntry = MealFactory.create({
  id: "entry-2",
  type: OrderingDomainModel.MealType.ENTRY,
  requiredAge: 18,
});

const regularMainCourse = MealFactory.create({
  id: "main-course-1",
  type: OrderingDomainModel.MealType.MAIN_COURSE,
});

const adultMainCourse = MealFactory.create({
  id: "main-course-2",
  type: OrderingDomainModel.MealType.MAIN_COURSE,
  requiredAge: 18,
});

const regularDessert = MealFactory.create({
  id: "dessert-1",
  type: OrderingDomainModel.MealType.DESSERT,
});

const adultDessert = MealFactory.create({
  id: "dessert-2",
  type: OrderingDomainModel.MealType.DESSERT,
  requiredAge: 18,
});

const regularDrink = MealFactory.create({
  id: "drink-1",
  type: OrderingDomainModel.MealType.DRINK,
});

const adultDrink = MealFactory.create({
  id: "drink-2",
  type: OrderingDomainModel.MealType.DRINK,
  requiredAge: 18,
});

const adult = GuestFactory.create({
  id: "1",
  firstName: "John",
  lastName: "Doe",
  age: 30,
});

const children = GuestFactory.create({
  id: "2",
  firstName: "Jane",
  lastName: "Doe",
  age: 10,
});

const meals: OrderingDomainModel.Meal[] = [
  regularEntry,
  regularMainCourse,
  regularDessert,
  regularDrink,
  adultEntry,
  adultMainCourse,
  adultDessert,
  adultDrink,
];

const mealForm = new MealForm();

describe("Selecting meals", () => {
  it.each([
    {
      meals: [],
      guest: adult,
      expected: [],
    },
    {
      meals,
      guest: adult,
      expected: [regularEntry, adultEntry],
    },
    {
      meals,
      guest: children,
      expected: [regularEntry],
    },
  ])(`should get selectable entries`, ({ meals, guest, expected }) => {
    const result = mealForm.getSelectableEntries(meals, guest);
    expect(result).toEqual(expected);
  });

  it.each([
    {
      meals: [],
      guest: adult,
      expected: [],
    },
    {
      meals,
      guest: adult,
      expected: [regularMainCourse, adultMainCourse],
    },
    {
      meals,
      guest: children,
      expected: [regularMainCourse],
    },
  ])(`should get selectable main courses`, ({ meals, guest, expected }) => {
    const result = mealForm.getSelectableMainCourses(meals, guest);
    expect(result).toEqual(expected);
  });

  it.each([
    {
      meals: [],
      guest: adult,
      expected: [],
    },
    {
      meals,
      guest: adult,
      expected: [regularDessert, adultDessert],
    },
    {
      meals,
      guest: children,
      expected: [regularDessert],
    },
  ])(`should get selectable dessert`, ({ meals, guest, expected }) => {
    const result = mealForm.getSelectableDesserts(meals, guest);
    expect(result).toEqual(expected);
  });

  it.each([
    {
      meals: [],
      guest: adult,
      expected: [],
    },
    {
      meals,
      guest: adult,
      expected: [regularDrink, adultDrink],
    },
    {
      meals,
      guest: children,
      expected: [regularDrink],
    },
  ])(`should get selectable drink`, ({ meals, guest, expected }) => {
    const result = mealForm.getSelectableDrinks(meals, guest);
    expect(result).toEqual(expected);
  });
});
