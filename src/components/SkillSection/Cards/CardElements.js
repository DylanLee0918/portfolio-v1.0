import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
`

export const Title = styled.h1`
    color: #FFF;
`

export const Subtle = styled.span`
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
`