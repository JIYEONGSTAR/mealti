import React from "react";
import AuthContainer from "components/auth/AuthContainer";
import Seo from "components/Seo";
import AuthForm from "components/auth/AuthForm";
const Initialization = () => {
  return (
    <>
      <Seo title="정보" />
      <AuthContainer>
        <AuthForm isEdit={true} />
      </AuthContainer>
    </>
  );
};

export default Initialization;
