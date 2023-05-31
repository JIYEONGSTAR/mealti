// 화면 타이틀
import React from "react";
import Head from "next/head";
const Seo = ({ title }: { title?: string }) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title && `${title} |`} MEALTI</title>
      <meta name="description" content="MEALTI - 나만의 식비 가계부" />
      <meta
        name="keywords"
        content="식비, 가계부, 나만의, Mealti, 식사, 비용"
      />
      <meta property="og:title" content="MEALTI - 나만의 식비 가계부" />
      <meta
        property="og:description"
        content="MAELTI는 식비 가계부 서비스입니다."
      />
      <meta property="og:url" content="https://mealti-38fed.web.app" />
    </Head>
  );
};

export default Seo;
