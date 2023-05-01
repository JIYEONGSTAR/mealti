import { firestore } from "firebase/clientApp";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryKeys } from "react-query/constants";
import { UserInfo } from "types";

interface UserInfoUid extends UserInfo {
  uid: string;
}
const postUserInfo = async ({ uid, initialDate, budget }: UserInfoUid) => {
  const res = await setDoc(doc(firestore, "users", uid), {
    initialDate,
    budget,
  });
  return { res, uid };
};

const getUserInfo = async (uid: string) => {
  const userInfo = await getDoc(doc(firestore, `users`, uid));
  console.log("userInfo", userInfo.data());
  return userInfo.data();
};

export function useUserInfo(uid: string) {
  const fallback: string[] = [];

  const { data = fallback } = useQuery([queryKeys.user], () =>
    getUserInfo(uid)
  );

  return data;
}

export const usePostUserInfo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (request: UserInfoUid) => postUserInfo(request),
    {
      onSuccess: ({ res, uid }) => {
        queryClient.invalidateQueries([queryKeys.user]);
        queryClient.setQueryData([queryKeys.user], () => {
          return getUserInfo(uid);
        });
        queryClient.invalidateQueries([queryKeys.meals]);
      },
      onError: () => {
        alert("오류발생");
      },
    }
  );
  return mutate;
};
