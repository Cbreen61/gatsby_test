import { Link } from "gatsby"
import styled from "styled-components"



export const Nav = styled.nav`  
background: ${({ active }) => active ? "#101522" : "#101522"};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? "none" : "transparent")};
        transition: 0.8s all ease;
        width: 100%; 
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }
`


export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1000px;
`

export const NavLogo = styled(Link)`
color: #f3f079;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
font-family: 'Dancing Script', cursive;


@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=League+Script&display=swap');

&:hover {
    color: #ff4040;
    transition: all 0.3s ease;
}
`

export const MobileIcon= styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){ 
        display: block;
        flex-direction: column;
        width: 30%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? "100%":"-1000px" ) };
        opacity: 1;
        transition: all 0.2s ease;
        background: #fff;
        position: absolute;
        right: 0;
        border:1px solid #fff;




    }
`

export const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px){
    width: 100%;
}
`

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
font-family: "Ubuntu", sans-serif;

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #101522;

    &:hover {
        color: #ff4040;
        transition: all 0.3s ease;
    }
}
`
