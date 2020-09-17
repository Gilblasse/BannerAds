const boxAnimation = {
    start: { opacity: 0 },

    end:{
        opacity: 1,
        transition: {
            duration: 5 
        }
    }
}


export const Ads = [
    {
        colored: true,
        bkgImg: require('./images/Gears.png'),
        position: {container: 'translate(0%, 44%)', content: 'translate(25px, 202px)'},
        contentWidth: '117px',
        additionalBoxes: false,
        isTopLogo: false,
        boxAnimation
    },
    
    {
        colored: false,
        bkgImg: require('./images/redBkg.png'),
        position: {container: 'translate(0%, 25%)', content: 'translate(25px, 202px)'},
        contentWidth: '117px',
        additionalBoxes: true,
        isTopLogo: false,
    },

    {
        colored: false,
        bkgImg: require('./images/bkg-people.jpg'),
        position: {container: 'translate(0px, 158px)', content: 'translate(16px, 306px)'},
        contentWidth: '117px',
        additionalBoxes: false,
        isTopLogo: true,
    }

]