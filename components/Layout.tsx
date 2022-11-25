// 레이아웃
import NavBar from "components/NavBar";

import React from "react";

const Layout = ({ children, onChangeColorMode, isDark }: any) => {
  return (
    <>
      <NavBar onChangeColorMode={onChangeColorMode} isDark={isDark} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
