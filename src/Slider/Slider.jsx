import React from 'react';
import { useEffect, useState } from 'react';
import './Slider.scss'


const Slider = ({data}) => {


    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()   


    console.log(data)
    
    useEffect(() => {
        setLength(data.length)
    }, [data])


    const offsetRight = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        console.log('asafa')
    }

    const offsetLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        console.log('asafa')
    
    }



    return (
        <section className='slider'>
            <div className="slider__title">Популярные товары</div>
            <div className="slider__wrapper">
                <button className="btn__prev2"  onClick={offsetLeft}/>
                <div className="window">
                        <div className="slider__wrapper-move" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {data.map((item, i) => {
                                return(
                                    <div className="slider__content">
                                        
                                        <img  src={item.picture}  key={i} alt="picture" className='images'/>
                                        <div className="slider__wrapper-title">{item.title}</div>
                                        <div className="slider__wrapper-description">{item.description}</div>
                                        <div className="slider__wrapper-price">{item.price}</div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                    <button className="btn__next2"  onClick={offsetRight}/>
            </div>
  
        </section>
    );
}

export default Slider;
