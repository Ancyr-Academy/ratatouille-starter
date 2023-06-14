export namespace OrderingDomainModel {
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
