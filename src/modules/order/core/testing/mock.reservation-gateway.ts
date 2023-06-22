import { IReservationGateway } from "@ratatouille/modules/order/core/gateway/reservation.gateway";
import { ReserveDTO } from "@ratatouille/modules/order/core/gateway/reserve.dto";

export class MockReservationGateway implements IReservationGateway {
  private reserveCallData: ReserveDTO | null = null;

  async reserve(data: ReserveDTO): Promise<void> {
    this.reserveCallData = data;
  }

  expectReserveWasCalledWith(data: ReserveDTO) {
    expect(this.reserveCallData).toEqual(data);
  }
}
