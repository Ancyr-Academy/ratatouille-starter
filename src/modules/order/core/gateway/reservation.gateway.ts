import { ReserveDTO } from "@ratatouille/modules/order/core/gateway/reserve.dto";

export interface IReservationGateway {
  reserve(data: ReserveDTO): Promise<void>;
}
