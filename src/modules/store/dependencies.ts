import { IIDProvider } from "@ratatouille/modules/core/id-provider";

export type Dependencies = {
  idProvider: IIDProvider;

  tableGateway: ITableGateway;
};
