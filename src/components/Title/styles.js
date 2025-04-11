import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => (props.theme === "primary" ? "#fff" : "#fe7e5d")};
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  margin-top: 25px;
`
