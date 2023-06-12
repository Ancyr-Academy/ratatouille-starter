import { Dependencies } from "@ratatouille/modules/store/dependencies";
import { AppStore, createStore } from "@ratatouille/modules/store/store";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {};
  }
}

export const app = new App();
