import {
  Box,
  Button,
  Card,
  CardActionArea,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useTable } from "@ratatouille/modules/order/react/sections/table/use-table.hook";

export const TableSection: React.FC<{}> = () => {
  const presenter = useTable();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6">Sélectionnez une table</Typography>
      <Grid container sx={{ paddingTop: 2 }} columnSpacing={2} rowSpacing={2}>
        {presenter.availableTables.map((table) => (
          <Grid key={table.id} item xs={4}>
            <SelectableTable
              title={table.title}
              isSelected={presenter.assignedTableId === table.id}
              onSelect={() => presenter.assignTable(table.id)}
            />
          </Grid>
        ))}
      </Grid>
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

const SelectableTable: React.FC<{
  title: string;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ title, isSelected, onSelect }) => {
  return (
    <CardActionArea onClick={onSelect}>
      <Card sx={{ padding: 4 }} elevation={isSelected ? 6 : 1}>
        <Typography variant="h6" fontWeight={isSelected ? 700 : undefined}>
          {title}
        </Typography>
      </Card>
    </CardActionArea>
  );
};
