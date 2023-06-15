export namespace OrderingDomainModel {
  export enum Step {
    GUESTS = 0,
    TABLE = 1,
    MEALS = 2,
    SUMMARY = 3,
    RESERVED = 4,
  }

  export type Form = {
    guests: Guest[];
    organizerId: string | null;
  };

  export type Guest = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
  };
}
