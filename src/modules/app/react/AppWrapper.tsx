"use client";

import React from "react";
import { Provider } from "react-redux";
import { app } from "@ratatouille/modules/app/main";
import { DependenciesProvider } from "@ratatouille/modules/app/react/DependenciesProvider";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={app.store}>
      <DependenciesProvider dependencies={app.dependencies}>
        {children}
      </DependenciesProvider>
    </Provider>
  );
};
