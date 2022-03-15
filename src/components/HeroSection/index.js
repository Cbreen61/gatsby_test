import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection(){
    return(
        <div className='hero-container'>
            <div className='about'>
                <h1>Roberta's at Home</h1>
                <p>Hand crafted wood fired frozen pizza made with the realest ingredients and baked with love. </p> 
                <p>Wherever you are get your slice.</p>
                <a className='hero-btns' href="https://www.goldbelly.com/robertas-pizza">
                    <Button>
                     Order now
                    </Button>
                </a>

            </div>
        </div>
    )
}

export default HeroSection