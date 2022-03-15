import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
background-color: #101522;
display: felx;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 20px auto;

@media screen and (max-width: 820px) {
    flex-direction: column;

}
`
export const SocialLogo = styled(Link)`
color: #f3f079;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-family: 'Dancing Script', cursive;


@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=League+Script&display=swap');

&:hover {
    color: #ff4040;
    transition: all 0.3s ease;
}

`


export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
font-family: "Ubuntu", sans-serif;
`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;

text-decoration: none;
`
export const Socialgroup = styled.div`
`
export const SocialLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
width: 100px;
font-size: 18px;
color: #fff;
text-decoration: none;




`