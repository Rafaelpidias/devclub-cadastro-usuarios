import styled from "styled-components";


export const Background = styled.div`
background: linear-gradient(to right, #fe7e5d, #7f3841);
height: 30vh;
width: 90vw;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
max-width: 800px; // quando a tela ficar grande, não crescer muito //

img{
    max-width: 100%;
    max-height: 100%; // para não ocupar mais espaço que nosso item está ocupando//

}
transition: transform 0.7s ease-in, background-color 0.9s ease-in;

&:hover{
    transform: scale(1.1); // quando passamos o mouse por cima, o item será ampliado //
    background: linear-gradient(to right,#5db6fe,#6e387f);
}
`