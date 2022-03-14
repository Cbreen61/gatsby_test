import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection(){
    return(
        <div className='hero-container'>
            <div className='hero-btns'>
            <Button fontBig big primary >Search</Button>    
            </div>    
        </div>
    )
}

export default HeroSection