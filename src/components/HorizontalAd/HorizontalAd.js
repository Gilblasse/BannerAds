import React from 'react'
import './HorizontalAd.css'

export default function HorizontalAd() {
    return (
        <div className="HorizontalAd">

            <div className="HorizontalAd__main">

            
                <div className='HorizontalAd__tiles'>
                    <img width='125' src={require('./images/Tiles.png')}/>
                </div>

                <div className="HorizontalAd__content">
                    <div className="HorizontalAd__caption">
                     <img className="HorizontalAd__caption-img" src={require('./images/Star Alliance@1X.png')}/>
                    </div>

                    <div className="HorizontalAd__main-content-container">
                        <div className="HorizontalAd__main-content">
                            ADD A STOPOVER IN PORTUGAL. DIFFERENT CULTURE.
                            SAME KIND OF OVERLY PASSIONATE SPORTS FANS.
                        </div>
                        <div className="HorizontalAd__secondary-content">
                            <img className="HorizontalAd__secondary-logo" src={require('./images/TAP_logo.svg')}/>
                        </div>
                    </div>
                    <button className="HorizontalAd__action-btn">Book Now</button>
                </div>

            </div>

                <img className="HorizontalAd__logo" src={require('./images/flytap.png')}/>
        </div>
    )
}
