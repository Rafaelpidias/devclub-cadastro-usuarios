import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 200px;
  transition: 0.4s ease-in-out;

  &:hover {
    max-width: 400px;
    transition: 0.4s ease-in-out;
  }

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }

  h3,
  p {
    opacity: 0; // Esconde o texto inicialmente
    visibility: hidden; // Remove o texto da renderização visual
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover h3,
  &:hover p {
    opacity: 1; // Torna visível no hover
    visibility: visible; // Garante que o texto seja renderizado
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding: 32px;
  overflow: hidden;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const AvatarUser = styled.img`
  height: 100px;
`;
