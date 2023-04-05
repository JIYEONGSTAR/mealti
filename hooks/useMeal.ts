import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { EMeal, Meal } from "types";
import { firestore } from "firebase/clientApp";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";

import { queryKeys } from "react-query/constants";

const getMeals = async (uid: string, startDate?: string, endDate?: string) => {
  console.log("uid", uid);
  //uid불러올 방법 생각하기 (seccion-storage? cookie? localStroge?)
  const mealRef = collection(firestore, "posts");

  const q =
    startDate && endDate
      ? query(
          mealRef,
          where("uid", "==", uid),
          where("date", ">=", Timestamp.fromDate(new Date(startDate))), //시작날
          where("date", "<=", Timestamp.fromDate(new Date(endDate))) //끝날
        )
      : query(mealRef, where("uid", "==", uid));

  const querySnapshot = await getDocs(q);

  const data: EMeal[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as EMeal);
  });
  return data;
};

export function useMeal(
  uid: string,
  startDate?: string,
  endDate?: string
): EMeal[] {
  const fallback: EMeal[] = [];

  const { data = fallback } = useQuery([queryKeys.meals, startDate], () =>
    getMeals(uid, startDate, endDate)
  );

  return data;
}

async function postMeal(meal: Meal): Promise<void> {
  await addDoc(collection(firestore, "posts"), {
    date: Timestamp.fromDate(new Date(meal.date)),
    menu: meal.menu,
    cost: meal.cost,
    location: meal.location,
    restarurat: meal.restaurant,
    content: meal.content,
    image: meal.image,
    uid: meal.uid,
  });
}

export function usePostMeal(): UseMutateFunction<void, unknown, Meal, unknown> {
  // 그러나 문서에 유의미한 ID를 두지 않고 Cloud Firestore에서 자동으로 ID를 생성하도록 하는 것이 편리한 때도 있습니다. 이렇게 하려면 다음과 같은 언어별 add() 메서드를 호출하면 됩니다.
  const queryClient = useQueryClient();
  const { mutate } = useMutation((meal: Meal) => postMeal(meal), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.meals]);
    },
  });
  return mutate;
}
