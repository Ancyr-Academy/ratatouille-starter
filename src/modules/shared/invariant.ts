export const invariant = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};
