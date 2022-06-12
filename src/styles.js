import styled, { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  :root{
    --translate-carro1: 0;
    --translate-carro2: 0;
    --translate-carro3: 0;
    --translate-carro4: 0;
  }
`;

export const Cruzamento = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;

  .fundo {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .carro1 {
    position: absolute;
    top: 48%;
    left: 12%;
    transform: rotate(90deg) translateY(var(--translate-carro1));
    transition: all 1s ease-in-out;

    &.active {
      --translate-carro1: -75vh;
    }
  }

  .carro2 {
    position: absolute;
    left: 51%;
    top: 10%;
    transform: rotate(180deg) translateY(var(--translate-carro2));
    transition: all 1s ease-in-out;

    &.active {
      --translate-carro2: -75vh;
    }
  }

  .carro3 {
    position: absolute;
    top: 40%;
    left: 80%;
    transform: rotate(270deg) translateY(var(--translate-carro3));
    transition: all 1s ease-in-out;

    &.active {
      --translate-carro3: -75vh;
    }
  }

  .carro4 {
    position: absolute;
    top: 78%;
    left: 41%;
    transform: rotate(0deg) translateY(var(--translate-carro4));
    transition: all 1s ease-in-out;

    &.active {
      --translate-carro4: -75vh;
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  padding: 3rem;

  h1 {
  }

  button {
    border: none;
    border-radius: 2rem;
    background-color: #008cba;
    padding: 1rem 2rem;
    color: #fff;

    &:first-of-type {
      background-color: #ff5f00;

      &:hover {
        background-color: #ff8f00;
      }
    }

    &:hover {
      cursor: pointer;
      background-color: #00bcd4;
    }

    &:not(-last-of-type) {
      margin-right: 1rem;
    }
  }
`;

export const CardCarro = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem;

  .light {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #fff;

    &.active {
      background-color: green;
    }

    &.inactive {
      background-color: red;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
`;
