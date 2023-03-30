import RegisterForm from "components/register/RegisterForm";
import Seo from "components/Seo";
import React from "react";

const index = () => {
  return (
    <>
      <Seo title="register" />
      <RegisterForm />
    </>
  );
};

export default index;
