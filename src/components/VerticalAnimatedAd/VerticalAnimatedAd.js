import React, { useState, useEffect } from 'react'
import VerticalAd from './VerticalAd/VerticalAd'
import { Ads } from './Ads';


export default function VerticalAnimatedAd() {
    const [ad, setAd] = useState({})
    const [selectAd, setSelectAd] = useState(0)
    const [content, setContent] = useState()

    useEffect(() => {   
        setAd( { ...Ads[selectAd] } )
        setContent(adContent(selectAd))
    }, [selectAd])

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectAd(selectAd => {
                const i = selectAd + 1
                return Ads[i] ? i : 0
            })
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const adContent = (num)=>{
        switch (num) {
            case 0:
                return(
                    <>
                        <p>Efficiency matters.</p> 
                        <p className="bold">Ricoh is here to help.</p>
                    </>
                )

            case 1:
                return  <p><span className="bold">Optimize</span> print, information management, and collaboration.</p>
        
            case 2:
                return (
                    <>
                        <div>Ricoh is <span className="bold">here to help.</span></div>
                        <div className="caption">Learn more about how our integrated solutions make your business more efficient and productive</div>
                    </>
                )
            default:
                break;
        }
    }



    return (
        <div>
            <VerticalAd ad={ad}>
                {content}
            </VerticalAd>
        </div>
    )
}
