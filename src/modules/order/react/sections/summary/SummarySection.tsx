import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSummary } from "@ratatouille/modules/order/react/sections/summary/use-summary.hook";

export const SummarySection: React.FC<{}> = () => {
  const presenter = useSummary();

  return (
    <Box>
      <Typography variant="h5">Récapitulatif</Typography>
      <Stack spacing={2} marginTop={2}>
        <Stack spacing={1}>
          <Typography variant="h6">
            <b>Invités</b>
          </Typography>
          {presenter.summary.guests.map((guest) => (
            <>
              <Typography key={guest.id} variant="body1">
                {guest.name}
              </Typography>
              {guest.meals.entry && (
                <Typography variant="body2">
                  Entrée : {guest.meals.entry.title}
                </Typography>
              )}
              {guest.meals.mainCourse && (
                <Typography variant="body2">
                  Plat : {guest.meals.mainCourse.title}
                </Typography>
              )}
              {guest.meals.dessert && (
                <Typography variant="body2">
                  Dessert : {guest.meals.dessert.title}
                </Typography>
              )}
              {guest.meals.drink && (
                <Typography variant="body2">
                  Boisson : {guest.meals.drink.title}
                </Typography>
              )}
            </>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h6">
            <b>Table</b>
          </Typography>
          <Typography variant="body1">
            {presenter.summary.table.title}
          </Typography>
        </Stack>
      </Stack>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        marginTop={2}
      >
        <Grid item>
          <Button variant="contained" onClick={presenter.onPrevious}>
            Précédent
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={presenter.onNext}>
            Réserver
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
