import { firestore } from "firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { useQuery } from "react-query";
import { queryKeys } from "react-query/constants";
import { useRecoilState } from "recoil";
import { userState, userId } from "store/userState";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const [currentUserId, setCurrentUserId] = useRecoilState(userId);

  return { currentUser, setCurrentUser, currentUserId, setCurrentUserId };
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
export default useCurrentUser;
