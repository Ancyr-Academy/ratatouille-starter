import React from "react";
import {
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Grid,
} from "@mui/material";
import { useMeal } from "@ratatouille/modules/order/react/sections/meals/use-meal.hook";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export const MealsSection: React.FC<{}> = () => {
  const presenter = useMeal();
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h4">Composez votre plat</Typography>
      <Stack sx={{ marginTop: 4 }} gap={4}>
        {presenter.guests.map((guest) => (
          <GuestMealComposer
            key={guest.id}
            guestId={guest.id}
            firstName={guest.firstName}
            lastName={guest.lastName}
            selectedEntryId={guest.meals.entry}
            selectedMainCourseId={guest.meals.mainCourse}
            selectedDessertId={guest.meals.dessert}
            selectedDrinkId={guest.meals.drink}
            entries={presenter.getSelectableEntries(guest.id)}
            mainCourses={presenter.getSelectableMainCourses(guest.id)}
            desserts={presenter.getSelectableDesserts(guest.id)}
            drinks={presenter.getSelectableDrinks(guest.id)}
            onEntrySelected={presenter.assignEntry}
            onMainCourseSelected={presenter.assignMainCourse}
            onDessertSelected={presenter.assignDessert}
            onDrinkSelected={presenter.assignDrink}
          />
        ))}
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
          <Button
            variant="contained"
            onClick={presenter.onNext}
            disabled={presenter.isSubmittable === false}
          >
            Suivant
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const GuestMealComposer: React.FC<{
  guestId: string;
  firstName: string;
  lastName: string;

  selectedEntryId: OrderingDomainModel.MealId | null;
  selectedMainCourseId: OrderingDomainModel.MealId | null;
  selectedDessertId: OrderingDomainModel.MealId | null;
  selectedDrinkId: OrderingDomainModel.MealId | null;

  entries: OrderingDomainModel.Meal[];
  mainCourses: OrderingDomainModel.Meal[];
  desserts: OrderingDomainModel.Meal[];
  drinks: OrderingDomainModel.Meal[];

  onEntrySelected: (guestId: string, id: string) => void;
  onMainCourseSelected: (guestId: string, id: string) => void;
  onDessertSelected: (guestId: string, id: string) => void;
  onDrinkSelected: (guestId: string, id: string) => void;
}> = ({
  guestId,
  firstName,
  lastName,

  selectedEntryId,
  selectedMainCourseId,
  selectedDessertId,
  selectedDrinkId,

  entries,
  mainCourses,
  desserts,
  drinks,

  onEntrySelected,
  onMainCourseSelected,
  onDessertSelected,
  onDrinkSelected,
}) => {
  return (
    <Stack rowGap={2}>
      <Typography variant="h6">
        {firstName} {lastName}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Entrée</InputLabel>
        <Select
          label="Entrée"
          value={selectedEntryId ?? undefined}
          onChange={(event: SelectChangeEvent) => {
            onEntrySelected(guestId, event.target.value as string);
          }}
        >
          {entries.map((meal) => (
            <MenuItem key={meal.id} value={meal.id}>
              {meal.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>{" "}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Plat Principal</InputLabel>
        <Select
          required
          label="Plat Principal*"
          value={selectedMainCourseId ?? undefined}
          onChange={(event: SelectChangeEvent) => {
            onMainCourseSelected(guestId, event.target.value as string);
          }}
        >
          {mainCourses.map((meal) => (
            <MenuItem key={meal.id} value={meal.id}>
              {meal.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dessert</InputLabel>
        <Select
          label="Plat Principal"
          value={selectedDessertId ?? undefined}
          onChange={(event: SelectChangeEvent) => {
            onDessertSelected(guestId, event.target.value as string);
          }}
        >
          {desserts.map((meal) => (
            <MenuItem key={meal.id} value={meal.id}>
              {meal.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Boisson</InputLabel>
        <Select
          label="Boisson"
          value={selectedDrinkId ?? undefined}
          onChange={(event: SelectChangeEvent) => {
            onDrinkSelected(guestId, event.target.value as string);
          }}
        >
          {drinks.map((meal) => (
            <MenuItem key={meal.id} value={meal.id}>
              {meal.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
