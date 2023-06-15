import { MealFactory } from "@ratatouille/modules/order/core/model/meal.factory";
import { FailingMealGateway } from "@ratatouille/modules/order/core/testing/failing.meal-gateway";
import { StubMealGateway } from "@ratatouille/modules/order/core/testing/stub.meal-gateway";
import { fetchMeals } from "@ratatouille/modules/order/core/usecases/fetch-meals.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";

describe("Fetch meals", () => {
  it("should fetch the meals", async () => {
    const meal = MealFactory.create({
      id: "1",
    });

    const listOfMeals = [meal];

    const store = createTestStore({
      dependencies: {
        mealGateway: new StubMealGateway(listOfMeals),
      },
    });

    const promise = store.dispatch(fetchMeals);

    expect(store.getState().ordering.availableMeals.status).toEqual("loading");

    await promise;

    expect(store.getState().ordering.availableMeals.data).toEqual(listOfMeals);
    expect(store.getState().ordering.availableMeals.status).toEqual("success");
  });

  it("should fail to fetch the meals", async () => {
    const store = createTestStore({
      dependencies: {
        mealGateway: new FailingMealGateway(),
      },
    });

    const promise = store.dispatch(fetchMeals);

    expect(store.getState().ordering.availableMeals.status).toEqual("loading");

    await promise;

    expect(store.getState().ordering.availableMeals.data).toEqual([]);
    expect(store.getState().ordering.availableMeals.status).toEqual("error");
    expect(store.getState().ordering.availableMeals.error).toEqual(
      "Failed to fetch data"
    );
  });
});
