import Seo from "components/Seo";
import React from "react";
import { useMeal } from "hooks/useMeal";
import useCurrentUser from "hooks/useCurrentUser";
import AccountMonth from "components/account/AccountMonth";

const Meal = () => {
  const { currentUser } = useCurrentUser();
  const meal = useMeal(currentUser.id);
  return (
    <>
      <Seo title="식비일지" />
      <AccountMonth />
    </>
  );
};

export default Meal;
