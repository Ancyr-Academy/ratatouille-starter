import { IIDProvider } from "@ratatouille/modules/core/id-provider";
import { IMealGateway } from "@ratatouille/modules/order/core/gateway/meal.gateway";
import { ITableGateway } from "@ratatouille/modules/order/core/gateway/table.gateway";

export type Dependencies = {
  idProvider: IIDProvider;

  tableGateway: ITableGateway;
  mealGateway: IMealGateway;
};
