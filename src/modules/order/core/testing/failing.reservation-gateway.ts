import { IReservationGateway } from "@ratatouille/modules/order/core/gateway/reservation.gateway";

export class FailingReservationGateway implements IReservationGateway {
  async reserve(): Promise<void> {
    throw new Error("Reservation failed");
  }
}
