import { TableFactory } from "@ratatouille/modules/order/core/model/table.factory";
import { fetchTables } from "@ratatouille/modules/order/core/usecases/fetch-tables.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";

describe("Fetch tables", () => {
  it("should fetch the tables", async () => {
    const table = TableFactory.create({
      id: "1",
    });

    const listOfTables = [table];

    const store = createTestStore({
      dependencies: {
        tableGateway: {
          getTables: () => Promise.resolve(listOfTables),
        },
      },
    });

    const promise = store.dispatch(fetchTables);

    expect(store.getState().ordering.availableTables.status).toEqual("loading");

    await promise;

    expect(store.getState().ordering.availableTables.data).toEqual(
      listOfTables
    );

    expect(store.getState().ordering.availableTables.status).toEqual("success");
  });

  it("should handle table fetching failure", async () => {
    const store = createTestStore({
      dependencies: {
        tableGateway: {
          getTables: () => Promise.reject(new Error("Failed to fetch data")),
        },
      },
    });

    const promise = store.dispatch(fetchTables);

    expect(store.getState().ordering.availableTables.status).toEqual("loading");

    await promise;

    expect(store.getState().ordering.availableTables.data).toEqual([]);
    expect(store.getState().ordering.availableTables.status).toEqual("error");
    expect(store.getState().ordering.availableTables.error).toEqual(
      "Failed to fetch data"
    );
  });
});
