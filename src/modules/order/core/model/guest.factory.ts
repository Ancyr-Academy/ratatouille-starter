import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class GuestFactory {
  static create(data?: Partial<OrderingDomainModel.Guest>) {
    return {
      id: "",
      firstName: "",
      lastName: "",
      age: 24,
      ...data,
    };
  }
}
