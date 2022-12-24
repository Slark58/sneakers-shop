import React from 'react';
import './News.scss';
import '../App/App.scss'
import NewsItem from './NewsItem';

const News = () => {
    return (
        <section className='news'>
        
        <div className="container">

        <div className="news__wrapper">

            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
                
            </div>
        </div>
        </section>


    );
}

export default News;
