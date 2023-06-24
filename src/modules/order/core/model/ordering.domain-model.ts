export namespace OrderingDomainModel {
  export enum Step {
    GUESTS = 0,
    TABLE = 1,
    MEALS = 2,
    SUMMARY = 3,
    RESERVED = 4,
  }

  export enum MealType {
    ENTRY = "ENTRY",
    MAIN_COURSE = "MAIN_COURSE",
    DESSERT = "DESSERT",
    DRINK = "DRINK",
  }

  export type Form = {
    guests: Guest[];
    organizerId: string | null;
    tableId: string | null;
  };

  export type MealId = string;

  export type Meal = {
    id: MealId;
    title: string;
    type: MealType;
    requiredAge: number | null;
  };

  export type Guest = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    meals: {
      entry: MealId | null;
      mainCourse: MealId | null;
      dessert: MealId | null;
      drink: MealId | null;
    };
  };

  export type Table = {
    id: string;
    title: string;
    capacity: number;
  };

  export type ReservationStatus =
    | {
        status: "idle";
      }
    | {
        status: "loading";
      }
    | {
        status: "error";
        error: string;
      }
    | {
        status: "success";
      };

  export type State = {
    step: OrderingDomainModel.Step;
    form: OrderingDomainModel.Form;

    availableTables: {
      data: OrderingDomainModel.Table[];
      status: "idle" | "loading" | "success" | "error";
      error: string | null;
    };
    availableMeals: {
      data: OrderingDomainModel.Meal[];
      status: "idle" | "loading" | "success" | "error";
      error: string | null;
    };

    reservation: ReservationStatus;
  };

  export type MealSummary = {
    id: string;
    title: string;
  };

  export type Summary = {
    table: {
      id: string;
      title: string;
    };
    guests: Array<{
      id: string;
      name: string;
      isOrganizer: boolean;
      meals: {
        entry: MealSummary | null;
        mainCourse: MealSummary;
        dessert: MealSummary | null;
        drink: MealSummary | null;
      };
    }>;
  };
}
