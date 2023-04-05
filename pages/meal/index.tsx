import Seo from "components/Seo";
import React, { useEffect } from "react";
import { useMeal } from "hooks/useMeal";
import useCurrentUser from "hooks/useCurrentUser";
import AccountMonth from "components/account/AccountMonth";

import { EMeal } from "types";
const Meal = () => {
  const { currentUser } = useCurrentUser();
  const meal: EMeal[] = useMeal(currentUser.id);

  return (
    <>
      <Seo title="식비일지" />
      <AccountMonth meal={meal} />
    </>
  );
};

export default Meal;
