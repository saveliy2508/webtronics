import React, {useState} from 'react';
import s from './Review.module.scss'
import {Slider} from "./Slider/Slider";
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const plusSlideHandle = () => {
        if(currentSlide === 1 || currentSlide === 2){
            setCurrentSlide(prev => prev + 1)
        } else {
            setCurrentSlide(1)
        }
    }

    const minusSlideHandle = () => {
        if(currentSlide === 2 || currentSlide === 3){
            setCurrentSlide(prev => prev - 1)
        } else {
            setCurrentSlide(3)
        }
    }

    return (
        <div className={s.Review} id={'review-block'}>
            <BlurEllipse className={s.ellipse}/>
            <Image
                width={'21'}
                height={'24'}
                src={'/mediumBackgroundStar.png'}
                alt={'star'}
                className={s.mediumStar}
            />
            <div className={s.title}>Review</div>
            <main className={s.content}>
                <Slider plusCurrentSlide={plusSlideHandle} minusCurrentSlide={minusSlideHandle} currentSlide={currentSlide} />
            </main>
        </div>
    );
};
