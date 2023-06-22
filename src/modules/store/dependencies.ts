import { IIDProvider } from "@ratatouille/modules/core/id-provider";
import { IMealGateway } from "@ratatouille/modules/order/core/gateway/meal.gateway";
import { IReservationGateway } from "@ratatouille/modules/order/core/gateway/reservation.gateway";
import { ITableGateway } from "@ratatouille/modules/order/core/gateway/table.gateway";

export type Dependencies = {
  idProvider: IIDProvider;

  tableGateway: ITableGateway;
  mealGateway: IMealGateway;
  reservationGateway: IReservationGateway;
};
