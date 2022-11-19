import React from 'react';
import { useEffect, useState } from 'react';
import './Slider.scss'
import jaket from '../Imgs/jkss2210-blktng-0 (1).svg'


const Slider = ({data}) => {


    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()   
    
    const [price, setPrice] = useState([]) 
    

    useEffect(() => {
        setLength(data.length)
    }, [data])

    console.log(length)



    const offsetRight = () => {
        if (currentIndex < (length / 6)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(0)
        }
        
    }

    const offsetLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length / 6)
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
                        style={{ transform: `translateX(-${currentIndex * 1150}px)` }}>
                            {data.map((item, i) => {
                                
                                return(
                                    <a href='#' className="slider__content" key={i}>
                                        <div className="wrapperImg" ><img  src={jaket} alt="picture" className='images'/></div>
                                        <div className="slider__wrapper-title">{item.title}</div>
                                        <div className="slider__wrapper-description">{item.description}</div>
                                        <div className="slider__wrapper-price">{item.price} ₽</div>
                                        <div className="slider__wrapper-fraction">
                                            <div className="slider__wrapper-fraction-picture"><img src="https://brandshop.ru/assets/images//dolyame/dolyame-logo-small.svg" alt="Рассрочка" /></div>
                                            <div className="slider__wrapper-fraction-part">долями по {Math.floor(item.price / 4)} ₽</div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                </div>
                            

                <button className={currentIndex === 0 ? "Nonebtn" : "btn__prev2"}  onClick={offsetLeft}/>
                <button className={currentIndex === length / 6 ? "Nonebtn" : "btn__next2"}  onClick={offsetRight}/>

            </div>
            </div>
            
  
        </section>
    );
}

export default Slider;
