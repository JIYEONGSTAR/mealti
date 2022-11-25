import { atom } from "recoil"; // recoil 상태관리
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const userState = atom({
  key: "userState",
  default: {
    createdAt: null,
    email: "",
    food_expenses: 0,
    id: 0,
    start_day: 0,
    updatedAt: null,
    username: "",
  },
  effects_UNSTABLE: [persistAtom],
});
