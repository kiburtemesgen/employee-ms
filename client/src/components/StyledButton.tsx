import styled from "styled-components"


interface buttonProps {
    mainColor?: string;
    primary?: string;
  }



const StyledButton = styled.button<buttonProps>`
background: ${props => (props.primary ? props.mainColor : "white")};
color: ${props => (props.primary ? "white" : props.mainColor)};

display: inline;
font-size: 1rem;
margin: 1em;
padding: 0.5em 1em;
border: 2px solid ${props => props.mainColor};
border-radius: 15px;
`;


export default StyledButton