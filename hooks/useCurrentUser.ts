import { useRecoilState } from "recoil";
import { userState } from "store/userState";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
