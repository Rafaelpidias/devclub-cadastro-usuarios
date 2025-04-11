import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100% )"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content; // para ajustar ao tamanho da tela conforme cresce
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg,rgb(254, 93, 246) 0%, #ff6378 100% )"
        : "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100% )"};
    color: ${props => props.theme === "primary" ? "rgb(254, 230, 93) " : "#5d83fe"};
  }

  &:active {
    opacity: ${props => props.theme === "primary" ? "0.5" : "0.4"}
  }
`
