import React, {useCallback} from 'react';
import {slides} from "../consts/slides";
import classNames from "classnames";
import Image from "next/image";
import s from './Slider.module.scss';

interface SliderProps {
    currentSlide: number;
    plusCurrentSlide: () => void;
    minusCurrentSlide: () => void;
}

export const Slider = ({currentSlide, plusCurrentSlide, minusCurrentSlide}: SliderProps) => {
    let slide = useCallback(() => {
        let current;
        switch (currentSlide) {
            case 1:
                current = slides[currentSlide - 1]
                return {
                    mainPhoto: current.srcBig,
                    firstSidePhoto: slides[1].srcSmall,
                    secondSidePhoto: slides[2].srcSmall,
                    title: current.title,
                    description: current.description
                }
            case 2:
                current = slides[currentSlide - 1]
                return {
                    mainPhoto: current.srcBig,
                    firstSidePhoto: slides[0].srcSmall,
                    secondSidePhoto: slides[2].srcSmall,
                    title: current.title,
                    description: current.description
                }
            case 3:
                current = slides[currentSlide - 1]
                return {
                    mainPhoto: current.srcBig,
                    firstSidePhoto: slides[0].srcSmall,
                    secondSidePhoto: slides[1].srcSmall,
                    title: current.title,
                    description: current.description
                }
        }
    }, [currentSlide]);

    return (
        <div className={s.Slider}>
            <div className={s.text}>
                <div className={s.title}>
                    {slide()?.title}
                </div>
                <div className={s.description}>
                    {slide()?.description}
                </div>
            </div>
            <div className={s.content}>
                <div className={s.top}>
                    <div className={s.numbers}>
                        {currentSlide}/<span>{slides.length}</span>
                    </div>
                    <div className={s.buttonsWrapper}>
                        <div className={s.buttonGradientWrapper}>
                            <button
                                className={classNames(s.button, s.buttonLeft)}
                                onClick={minusCurrentSlide}
                            >
                                <Image
                                    width={'10'}
                                    height={'19'}
                                    src={'/vectorIcon.svg'}
                                    alt={'vector icon'}
                                />
                            </button>
                        </div>
                        <div className={s.buttonGradientWrapper}>
                            <button
                                className={classNames(s.button, s.buttonRight)}
                                onClick={plusCurrentSlide}
                            >
                                <Image
                                    width={'10'}
                                    height={'19'}
                                    src={'/vectorIcon.svg'}
                                    alt={'vector icon'}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.photos}>
                    <div className={s.photoGradientWrapper}>
                        <Image
                            className={s.photo}
                            width={'392'}
                            height={'422'}
                            src={slide()?.mainPhoto || ''}
                            alt={'photo'}
                        />
                    </div>
                    <div className={s.photoGradientWrapper}>
                        <Image
                            className={s.photo}
                            width={'184'}
                            height={'422'}
                            src={slide()?.firstSidePhoto || ''}
                            alt={'photo'}
                        />
                    </div>
                    <div className={s.photoGradientWrapper}>
                        <Image
                            className={s.photo}
                            width={'184'}
                            height={'422'}
                            src={slide()?.secondSidePhoto || ''}
                            alt={'photo'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
