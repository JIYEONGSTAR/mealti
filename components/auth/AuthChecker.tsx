import useCurrentUser from "hooks/useCurrentUser";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

const AuthChecker = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    // console.log("로그인상태변경", currentUser.id || "유저없음");
    if (currentUser.id === "") {
      router.push("/auth/login");
    }
  }, [currentUser]);

  return <>{children}</>;
};

export default AuthChecker;
