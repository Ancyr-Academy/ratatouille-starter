import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { extractErrorMessage } from "@ratatouille/modules/shared/errors.utils";
import { Dependencies } from "@ratatouille/modules/store/dependencies";
import { AppDispatch, AppGetState } from "@ratatouille/modules/store/store";

export const reserve =
  () =>
  async (
    dispatch: AppDispatch,
    getState: AppGetState,
    { reservationGateway }: Dependencies
  ) => {
    const form = getState().ordering.form;

    try {
      dispatch(orderingSlice.actions.handleReservationLoading());
      const result = await reservationGateway.reserve({
        tableId: form.tableId!,
        guests: form.guests.map((guest) => ({
          firstName: guest.firstName,
          lastName: guest.lastName,
          age: guest.age,
          isOrganizer: guest.id === form.organizerId,
          meals: {
            entry: guest.meals.entry,
            mainCourse: guest.meals.mainCourse!,
            dessert: guest.meals.dessert,
            drink: guest.meals.drink,
          },
        })),
      });
      dispatch(orderingSlice.actions.handleReservationSuccess());
    } catch (e) {
      dispatch(
        orderingSlice.actions.handleReservationError(extractErrorMessage(e))
      );
    }
  };
