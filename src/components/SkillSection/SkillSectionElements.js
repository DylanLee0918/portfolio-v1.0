import styled from "styled-components";

export const SkillSec = styled.div`
    height: 60vh;
    color: #fff;
    padding: 60px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};

    @media screen and  (max-width: 768px) {
        padding: 0px;
    }
`

export const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; /** repeat(auto-fit, 20rem */
    justify-content: center;
    grid-gap: 3rem 2rem;
    padding: 2rem;
    transition: all 0.5s ease-in-out;
`