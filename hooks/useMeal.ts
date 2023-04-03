import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { Meal } from "types";
import { firestore } from "firebase/clientApp";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

import { queryKeys } from "react-query/constants";

const getMeals = async () => {
  //uid불러올 방법 생각하기 (seccion-storage? cookie? localStroge?)
  const mealRef = collection(firestore, "posts");
  const q = query(mealRef, where("uid", "==", "116399980174675314701"));

  const querySnapshot = await getDocs(q);

  const data: Meal[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as Meal);
    console.log(doc.id, "", doc.data());
  });
  return data;
};

export function useMeal() {
  const fallback: any = [];

  const { data = fallback } = useQuery(queryKeys.meals, getMeals);

  return data;
}

async function postMeal(meal: Meal): Promise<void> {
  await addDoc(collection(firestore, "posts"), {
    date: meal.date,
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
