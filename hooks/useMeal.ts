import { useQuery, useQueryClient } from "react-query";
import { Meal } from "types";
import { queryClient } from "react-query/queryClient";
import { firestore } from "firebase/clientApp";
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import useCurrentUser from "hooks/useCurrentUser";
import { queryKeys } from "react-query/constants";
const getMeals = async () => {
  //uid불러올 방법 생각하기 (seccion-storage? cookie? localStroge?)
  const mealRef = collection(firestore, "posts");
  const q = query(mealRef, where("uid", "==", "116399980174675314701"));

  const querySnapshot = await getDocs(q);

  const data: Meal[] = [];
  querySnapshot.forEach((doc) => data.push(doc.data() as Meal));
  return data;
};

export function useMeal() {
  const fallback: any = [];

  const { data = fallback } = useQuery(queryKeys.meals, getMeals);

  return data;
}
