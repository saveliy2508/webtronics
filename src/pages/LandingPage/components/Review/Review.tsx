import React, {useState} from 'react';
import {Slider} from "./Slider/Slider";
import Image from "next/image";
import s from './Review.module.scss'
import {BackgroundReview} from "./BackgroundDecoration/BackgroundReview";

export const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const plusSlideHandle = () => {
        if (currentSlide === 1 || currentSlide === 2) {
            setCurrentSlide(prev => prev + 1)
        } else {
            setCurrentSlide(1)
        }
    }

    const minusSlideHandle = () => {
        if (currentSlide === 2 || currentSlide === 3) {
            setCurrentSlide(prev => prev - 1)
        } else {
            setCurrentSlide(3)
        }
    }

    return (
        <section className={s.Review} id={'review-block'}>
            <BackgroundReview />
            <div className={s.title}>Review</div>
            <main className={s.content}>
                <Slider
                    plusCurrentSlide={plusSlideHandle}
                    minusCurrentSlide={minusSlideHandle}
                    currentSlide={currentSlide}
                />
            </main>
        </section>
    );
};
