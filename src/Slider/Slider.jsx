import React from 'react';
import { useEffect, useState } from 'react';
import './Slider.scss'


const Slider = ({data}) => {


    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()   
    
    const [price, setPrice] = useState([]) 
    

    useEffect(() => {
        setLength(data.length)
    }, [data])





    const offsetRight = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const offsetLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    
    }

    useEffect(() => {
        data.map((item) => {
            setPrice(price => price = item.price)
        })
    }, [])  

    console.log(price)
    
    
    

    // console.log(2 / 3)


    return (
        <section className='slider'>
            <div className="container">
            <div className="slider__title">Популярные товары</div>
            <div className="slider__wrapper">
                <div className="window">
                        <div className="slider__wrapper-move" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {data.map((item, i) => {
                                
                                return(
                                    <div className="slider__content" key={i}>
                                        <div className="wrapperImg" ><img  src={item.picture} alt="picture" className='images'/></div>
                                        <div className="slider__wrapper-title">{item.title}</div>
                                        <div className="slider__wrapper-description">{item.description}</div>
                                        <div className="slider__wrapper-price">{item.price} ₽</div>
                                        <div className="slider__wrapper-fraction">{item.price / 2}</div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                <button className="btn__prev2"  onClick={offsetLeft}/>
                <button className="btn__next2"  onClick={offsetRight}/>

            </div>
            </div>
            
  
        </section>
    );
}

export default Slider;
