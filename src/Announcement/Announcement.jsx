import React from 'react';
import './Announcement.scss';

const Announcement = () => {
    // 	https://img.brandshop.ru/cache/products/p/premiata_160922_1488x1072.jpg

        console.log('regaem')
    return (

        // <div className="announcement">

        <div className='container'>
            <div className="announcement__wrapper">
                <a className="announcement__wrapper-img">
                    <picture>
                        <img className="announcement__wrapper-img-picture" src="https://img.brandshop.ru/cache/products/p/premiata_160922_1488x1072.jpg" alt="sneakers" />
                    </picture>
                </a>
                <div className="announcement__wrapper-info">
                    <a href="/" className="announcement__wrapper-info-categori">НОВЫЕ ПОСТУПЛЕНИЯ</a>
                    <div className="announcement__wrapper-info-title">Premiata</div>
                    <div className="announcement__wrapper-info-description">Нетривиальный подход к знакомым моделям, премиальные материалы, эклектичные символы и цветовые контрасты.</div>
                    <a href="/" className="announcement__wrapper-info-link">СМОТРЕТЬ</a>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Announcement;
