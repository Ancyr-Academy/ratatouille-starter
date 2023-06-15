import { TableFactory } from "@ratatouille/modules/order/core/model/table.factory";
import { StubTableGateway } from "@ratatouille/modules/order/core/testing/stub.table-gateway";
import { fetchTables } from "@ratatouille/modules/order/core/usecases/fetch-tables.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";
import { FailingTableGateway } from "@ratatouille/modules/order/core/testing/failing.table-gateway";

describe("Fetch tables", () => {
  it("should fetch the tables", async () => {
    const table = TableFactory.create({
      id: "1",
    });

    const listOfTables = [table];

    const store = createTestStore({
      dependencies: {
        tableGateway: new StubTableGateway(listOfTables),
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
        tableGateway: new FailingTableGateway(),
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
