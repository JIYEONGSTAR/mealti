import { useRecoilState } from "recoil";
import { userState, userId } from "store/userState";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const [currentUserId, setCurrentUserId] = useRecoilState(userId);

  return { currentUser, setCurrentUser, currentUserId, setCurrentUserId };
};

export default useCurrentUser;
