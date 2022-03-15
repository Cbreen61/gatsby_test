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


export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: px;
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
font-size: 14px;
color: #fff;
text-decoration: none;
font-family: "Ubuntu", sans-serif;



@media screen and (max-width: 820px) {
    text-align: center;
    padding: 0.5rem;
    width: 100%;
    display: table;

    &:hover {
        color: #ff4040;
        transition: all 0.3s ease;
    }
}




`