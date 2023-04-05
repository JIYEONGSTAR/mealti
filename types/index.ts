import { Timestamp } from "firebase/firestore";

export interface Meal {
  image?: string;
  content: string;
  cost: number;
  date: string;
  location: string;
  menu: string;
  restaurant: string;
  uid: string;
}

export interface EMeal extends Omit<Meal, "date"> {
  date: Timestamp;
}
