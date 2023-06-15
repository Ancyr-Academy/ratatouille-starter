export const extractErrorMessage = (e: unknown): string => {
  if (e instanceof Error) {
    return e.message;
  }

  return "Unknown error";
};
