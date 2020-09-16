import React, { useState, useEffect } from 'react'
import { Ads } from './Ads';


export default function VerticalAnimatedAd() {
    const [ad, setAd] = useState({})
    const [selectAd, setSelectAd] = useState(1)
    
    useEffect(() => {
        console.log(JSON.stringify(Ads[0].children))
    }, [])


    return (
        <div>
            vertical ad
            {/* <VerticalAd/> */}
        </div>
    )
}
