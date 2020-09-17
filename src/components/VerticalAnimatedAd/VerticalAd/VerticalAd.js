import React from 'react'
import { motion } from 'framer-motion'
import './VerticalAd.css'
import coloredLogo from '../images/logo-1.png'
import plainLogo from '../images/Ricoh logo-plain.png'
import topLogo from '../images/Top Logo.png'



export default function VerticalAd({ad: {colored, bkgImg, position, additionalBoxes, contentWidth, isTopLogo}, children}) {

    const showBoxes = additionalBoxes ? 'block' : 'none'

    const VerticalAd = {
        position: 'relative',
        backgroundImage: `url(${bkgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: isTopLogo && 'no-repeat',
        backgroundPosition: isTopLogo && '-436px -8px'
    }

    const contentStyles = {
        width: 80
    }

    const actionBtn = {
        color: colored ? '#6d6f73' : '#fff',
        border: `1.5px solid ${colored ? '#6d6f73' : '#fff'}`
    }

    const boxStyle = {
        transform: position?.container,
        backgroundColor: additionalBoxes && 'rgba(177,15,34, .6)'
    }

    const additionalBoxStyles = {
        backgroundColor: additionalBoxes && 'rgba(177,15,34, .6)'
    }

    const box1Styles = {
        width: 50,
        height: 50,
        width: 76,
        height: 76,
        top: 134,
        right: 0,
        position: 'absolute',
        display: showBoxes
    }

    const box2Styles = {
        width: 93,
        height: 111,
        position: 'absolute',
        top: 345,
        display: showBoxes,
        backgroundColor: 'rgba(177, 15, 34, 0.6)',
        zIndex: 5,
    }

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        width: contentWidth,
        transform: position?.content,
        fontSize: 18,
        color: '#fff',
        fontFamily: 'frutiger-light'
    }
    
  

    return (
        <div className="VerticalAd" style={VerticalAd}>

            {isTopLogo && <img className="top-logo" src={topLogo} alt="Logo"/>}

            <div style={contentStyle}>{children}</div>
            <div style={boxStyle} className='box' ></div>

            <div style={{...box1Styles,...additionalBoxStyles}} className='box-1'></div>
            <div style={{...box2Styles,...additionalBoxStyles}} className='box-1'></div>


            <button style={actionBtn} className="VerticalAd__button">Take Another Look</button>
            
            <div className='bottomLogoContainer'>
                <img src={colored ? coloredLogo : plainLogo} width={110} alt=""/>
            </div>
        </div>
    )
}   
