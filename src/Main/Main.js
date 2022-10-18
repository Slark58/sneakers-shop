import React from 'react';
// import wooman from '../Imgs/woman_main.jpeg'
// import man from '../Imgs/man__main.jpg'
import './Main.scss'



const Main = () => {
    
    return (
        <div className='container'>
            <div className="main">
                <a href="#" className='main__wrapp'>
                    <div className="main__man">
                        <img src="https://img.brandshop.ru/cache/products/m/main_m-160922_1104x1200.jpg" alt="woman" className="main__img"/>
                        <div className='main__span'>Мужское</div>
                        <div className="main__link">Смотреть</div>
                    </div>
                </a>
                <a href="#" className='main__wrapp'>
                    <div className="main__woman">
                        <img src="	https://img.brandshop.ru/cache/products/m/main_w_160922_1104x1200.jpg" alt="woman" className="main__img"/>
                        <div className='main__span'>Женское</div>
                        <div className="main__link">Смотреть</div>
                    </div>
                </a>
            </div>
        </div>
        
    );
}

export default Main;
