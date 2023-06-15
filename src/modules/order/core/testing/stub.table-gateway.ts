import { ITableGateway } from "@ratatouille/modules/order/core/gateway/table.gateway";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class StubTableGateway implements ITableGateway {
  constructor(private data: OrderingDomainModel.Table[] = []) {}

  async getTables(): Promise<OrderingDomainModel.Table[]> {
    return this.data;
  }
}
