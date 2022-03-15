import React, { useState, useEffect } from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem} from "./NavbarElements"

const Navbar = () => {
    const[click, setClick] = useState(false)
    const[scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () =>{
        if (window.scrollY >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }
    

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])


    return(
        <>
           <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}>
                 <NavbarContainer>
                    <NavLogo to="/">
                        Roberta's
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={ click }> 
                        <NavItem>
                            <NavLinks to="/locations">Locations</NavLinks>    
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="/events">Events</NavLinks>    
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="/FrozenPizza">Frozen Pizza</NavLinks>    
                        </NavItem> 
                        <NavItem>
                            <NavLinks href="https://culinaryagents.com/groups/656-Roberta%2527s" target="_blank" aria-label="Culinary Agents">Careers</NavLinks>    
                        </NavItem> 
                        <NavItem>
                            <NavLinks href="https://shop.robertaspizza.com/" target="_blank" aria-label="Shopify Store">Merch</NavLinks>    
                        </NavItem> 
                    </NavMenu>
                 </NavbarContainer>
                </Nav>    
            </IconContext.Provider>
        </>
    )
}

export default Navbar
