import { atom } from "recoil"; // recoil 상태관리
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const userId = atom({
  key: "userId",
  default: {
    uid: "",
  },
  effects_UNSTABLE: [persistAtom],
});

const userState = atom({
  key: "userState",
  default: {
    email: "",
    family_name: "",
    given_name: "",
    granted_scopes: "",
    id: "",
    locale: "",
    name: "",
    picture: "",
    verified_email: false,
  },
});

export { userState };
