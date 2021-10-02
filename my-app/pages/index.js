import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

import Header from "../src/components/Header";
import Todo from "../src/components/todo/Todo";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    background-color : #F6FFDB;
    margin: 0;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Todo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
