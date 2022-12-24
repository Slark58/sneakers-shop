import React from 'react';

const NewsItem = () => {
    return (
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

    );
}

export default NewsItem;
