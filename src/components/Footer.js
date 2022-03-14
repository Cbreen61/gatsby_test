import React from 'react'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'
import { NavbarContainer, NavMenu, NavItem, NavLinks, NavLogo2 } from './Navbar/NavbarElements'

function Footer(){
    return(
        <NavbarContainer>
        <NavLogo2>
        Roberta's
        </NavLogo2>
        <NavMenu>
            <NavItem>
                <NavLinks to="/">Contact</NavLinks>    
            </NavItem>    
            <NavItem>
                <NavLinks to="/events">Accessibility</NavLinks>    
            </NavItem>
            <NavItem>
                <NavLinks to="/events">Privacy Policy</NavLinks>    
            </NavItem>
        </NavMenu>
        <NavMenu>
        <NavItem>
                <NavLinks to="https://www.instagram.com/robertaspizza/"><FaInstagram /></NavLinks>    
            </NavItem>   
            <NavItem>
                <NavLinks to="https://www.facebook.com/robertasrestaurant"><FaFacebook/></NavLinks>    
            </NavItem> 
            <NavItem>
                <NavLinks to="https://www.yelp.com/biz/robertas-brooklyn-2"><FaYelp />Yelp</NavLinks>    
            </NavItem> 
        </NavMenu>
     </NavbarContainer>

    )
}

export default Footer