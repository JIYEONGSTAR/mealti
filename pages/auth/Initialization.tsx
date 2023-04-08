import React from "react";
import AuthContainer from "components/auth/AuthContainer";
import Seo from "components/Seo";
import InitializationForm from "components/auth/InitializationForm";
const Initialization = () => {
  return (
    <>
      <Seo title="정보" />
      <AuthContainer>
        <InitializationForm isEdit={true} />
      </AuthContainer>
    </>
  );
};

export default Initialization;
