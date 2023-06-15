import { IIDProvider } from "@ratatouille/modules/core/id-provider";

export class StubIDProvider implements IIDProvider {
  generate(): string {
    return "1";
  }
}
