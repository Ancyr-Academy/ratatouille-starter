"use client";

import { Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <CssBaseline />
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ratatouille
        </Typography>
      </Toolbar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};
