import React from 'react';
import img from '../assets/Group 165.png'
import lupa from '../assets/Group 10.png'
import box from '../assets/Group 12.png'
import man from '../assets/Group 13.png'
import './header.css';
const Header = () => {
    return (
        <div className={'header'}>
            <div className={'log'}>
                <img src={img} alt=""/>
            </div>
            <div className={'links'}>

                    <p>
                            HOME
                        </p>
                        <p>
                            ABOUT
                        </p>
                        <p>
                            PRODUCT
                        </p>
                        <p>
                            BLOG
                        </p>
                        <p>
                            SHOP
                        </p>
                        <p>
                            CONTACT US
                        </p>
            </div>
            <div className={'lupa'}>
                <div><img src={lupa} alt=""/></div>
                <div><img src={box} alt=""/></div>
                <div><img src={man} alt=""/></div>
            </div>
        </div>
    );
};

export default Header;