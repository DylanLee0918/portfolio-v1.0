import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterText} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Just follow me on facebook, Github, and Linked In.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at anytime.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems href="https://www.facebook.com/leedylan211/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </FooterLinkItems>
                    <FooterLinkItems href="https://github.com/DylanLee0918" target="_blank">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </FooterLinkItems>
                    <FooterLinkItems href="https://www.linkedin.com/in/jed-dylan-lee-7a66521aa/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterText>DEVDY2021 @ All Rights Reserved.</FooterText>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
