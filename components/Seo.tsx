// 화면 타이틀
import React from "react";
import Head from "next/head";
const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | MEALTI</title>
    </Head>
  );
};

export default Seo;
