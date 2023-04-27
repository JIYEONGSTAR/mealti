/* eslint-disable react-hooks/rules-of-hooks */
import useCurrentUser from "hooks/useCurrentUser";
import { get, del } from "utils/api";

export const useCommunity = () => {
  const currentUser =
    typeof localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user") as string)
      : { id: 1 };

  const getCommunityAll = async () => {
    const res = await get(`/community`);
    return res;
  };

  const getCommunityByUserId = async () => {
    const id = currentUser.id;
    const res = await get(`/community/${id}`).then((r: any) => {
      return r;
    });
    return res;
  };

  const deleteCommunityById = async (id: { id: number }) => {
    const res = await del(`/community/${id}`).then((r: any) => r);
    return res;
  };
  return { getCommunityAll, getCommunityByUserId, deleteCommunityById };
};
