import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 3rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    color: #fff;
`

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 24px;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`

export const FooterLinkItems = styled.a`
    color: #fff;
    font-size: 45px;

    &:hover {
        color: #0467FB;
        transition: all 0.3s ease-in-out;   
    }
`

export const FooterText = styled.p`
    display: flex;
    justify-content: center;
    color: #e7e7e8;
    opacity: 20%;
`