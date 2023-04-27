import { useRecoilState } from "recoil";
import { userState, userId } from "store/userState";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
