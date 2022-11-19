import React from 'react';
import './News.scss';
import '../App/App.scss'

const News = () => {
    return (
        <section className='news'>
        
        <div className="container">

        <div className="news__wrapper">

            {/* <div className="constainer"> */}
                <div className="news__item">
                    <a href="/" className="news__link">
                        <picture>
                            <img className="news__img ccimg" src="https://img.brandshop.ru/cache/products/s/sneakers-160922_720x720.jpg" alt="nike" />
                        </picture>
                    </a>

                    <div className="news__body">
                    <a href="/" class="news__body-categori hoveredline">
                        Sneakers
                    </a>
                    <h3 class="news__body-title">Nike Space Hippie 04</h3>
                    <a href="/" class="news__body-next hoveredline">
                        Подробнее
                    </a>
                    </div>
                </div>

                <div className="news__item">
                    <a href="/" className="news__link">
                        <picture>
                            <img className="news__img ccimg" src="https://img.brandshop.ru/cache/products/s/sneakers-160922_720x720.jpg" alt="nike" />
                        </picture>
                    </a>

                    <div className="news__body">
                    <a href="/" class="news__body-categori hoveredline">
                        Sneakers
                    </a>
                    <h3 class="news__body-title">Nike Space Hippie 04</h3>
                    <a href="/" class="news__body-next hoveredline">
                        Подробнее
                    </a>
                    </div>
                </div>

                <div className="news__item">
                    <a href="/" className="news__link">
                        <picture>
                            <img className="news__img ccimg" src="https://img.brandshop.ru/cache/products/s/sneakers-160922_720x720.jpg" alt="nike" />
                        </picture>
                    </a>

                    <div className="news__body">
                    <a href="/" class="news__body-categori hoveredline">
                        Sneakers
                    </a>
                    <h3 class="news__body-title">Nike Space Hippie 04</h3>
                    <a href="/" class="news__body-next hoveredline">
                        Подробнее
                    </a>
                    </div>
                </div>
            {/* </div> */}
            </div>
        </div>
        </section>


    );
}

export default News;
