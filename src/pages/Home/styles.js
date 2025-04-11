import styled from "styled-components"

export const Container = styled.div`
background-color: #181f36;
display:flex;
align-items:center;
justify-content:space-evenly; // criar espaçamento entre os itens disponiveis
height: 100vh;
padding: 20px;
flex-direction: column;

`




export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
padding: 20px;
gap: 20px;
max-width: 500px; // para não crescer muito com a tela grande //
`



export const ContainerInputs = styled.div`
display: flex;
gap: 20px;

`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color:#fff;
padding: 12px 20px;
outline:none;
width: 100%;
border: 2px solid   #086aa3;
transition:box-shadow 0.3s;

&:focus-within {
    box-shadow: 0 0 8px rgba(112, 122, 129, 0.2);
    background: linear-gradient(to right,#5db6fe,#6e387f)
}

&::placeholder {
    color:#050101;
}
`

export const InputLabel = styled.label`
color: #fff;
font-weight: bold;

span {
    color: #ef4f45;
    }

`




