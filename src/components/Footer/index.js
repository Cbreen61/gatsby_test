import React from 'react'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'
import { FooterContainer,SocialIconLink, SocialLogo, SocialMedia,SocialLink, SocialMediaWrap, WebsiteRights, SocialIcons } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to ="/">
                        Roberta's
                    </SocialLogo>
                    <WebsiteRights> Roberta's © {new Date().getFullYear()}</WebsiteRights>
                        <SocialLink to="/contact">Contact</SocialLink>
                        <SocialLink to="/accessibility">Accessibility</SocialLink>
                        <SocialLink to="/policy">Privacy Policy</SocialLink>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/robertasrestaurant" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/robertaspizza/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.yelp.com/biz/robertas-brooklyn-2" target="_blank" aria-label="Yelp">
                            <FaYelp />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer