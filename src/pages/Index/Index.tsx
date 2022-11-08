import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import IndexStyled from "./Styled";

function Index() {
  return (
    <IndexStyled>
      <Header />
      <div className="header__space">{false}</div>
      <Content />
    </IndexStyled>
  );
}

export default Index;
