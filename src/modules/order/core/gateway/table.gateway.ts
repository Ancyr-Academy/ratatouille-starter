import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export interface ITableGateway {
  getTables(): Promise<OrderingDomainModel.Table[]>;
}
