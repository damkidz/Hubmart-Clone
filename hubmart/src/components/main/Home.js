import React from 'react';
import Banner from '../banners/Banner';
import Promo from '../banners/Promo';
import MenuProducts from '../mainbody/MenuProducts';
import FeaturedProducts from '../mainbody/FeaturedProducts';


// const bodyScroll = require('body-scroll-toggle')
// bodyScroll.disable()
// bodyScroll.enable()

export default function HomePage() {
    return (
        <>
            <Banner />
            <Promo />
            <MenuProducts/> 
             <FeaturedProducts />
        </>
    );
}