import './Header.scss'

import React from 'react';
import cart from '../Imgs/shopping-cart.png'
import search from '../Imgs/search-interface-symbol.png'
import star from '../Imgs/star.png'
import logo from '../Imgs/trainers.png'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="nav">
                    <div className="nav__list">
                        
                        <a href="#"><img className="nav__logo" src={logo}/></a>
                        <a href="#" className="nav__link">Новинки</a>
                        <a href="#" className="nav__link">Бренды</a>
                        <a href="#" className="nav__link">Мужское</a>
                        <a href="#" className="nav__link">Женское</a>
                        <a href="#" className="nav__link">Аксессуары</a>
                        <a href="#" className="nav__link">Скидки</a>
                    </div>
                    <div href="#" className="nav__contact">
                        <img className="header__img" src="http://cdn.onlinewebfonts.com/svg/img_567684.png"></img>
                        <img className="header__img"src={search}></img>
                        <img className="header__img" src={star}></img>
                        {/* <button><img> src={}</img></button> */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
