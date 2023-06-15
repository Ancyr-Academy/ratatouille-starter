import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export class GuestFactory {
  static create(
    data?: Partial<OrderingDomainModel.Guest>
  ): OrderingDomainModel.Guest {
    return {
      id: "",
      firstName: "",
      lastName: "",
      age: 24,
      meals: {
        entry: null,
        mainCourse: null,
        dessert: null,
        drink: null,
      },
      ...data,
    };
  }
}
