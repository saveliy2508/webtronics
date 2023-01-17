import React from 'react';
import s from './Steps.module.scss'
import {StepsCard} from "pages/LandingPage/components/Steps/StepsCard";
import classNames from "classnames";
import {StepsLine} from "pages/LandingPage/components/Steps/StepsLine";
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const Steps = () => {
    return (
        <div className={s.Steps} id={'steps-block'}>
            <BlurEllipse className={s.ellipse}/>
            <Image
                width={'21'}
                height={'24'}
                src={'/mediumBackgroundStar.png'}
                alt={'star'}
                className={s.mediumStar1}
            />
            <Image
                width={'21'}
                height={'24'}
                src={'/mediumBackgroundStar.png'}
                alt={'star'}
                className={s.mediumStar2}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar1}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar2}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar3}
            />
            <div className={s.title}>Steps</div>
            <div className={s.cards}>
                <div className={classNames(s.cardsBlock, s.leftCards)}>
                    <StepsCard
                        number={1}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'right'}
                    />
                    <StepsCard
                        number={3}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'right'}
                    />
                    <StepsCard
                        number={5}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'right'}
                    />
                </div>
                <div className={s.line}>
                    <StepsLine/>
                </div>
                <div className={classNames(s.cardsBlock, s.rightCards)}>
                    <StepsCard
                        number={2}
                        title={'Overview of Development'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'left'}
                    />
                    <StepsCard
                        number={4}
                        title={'Overview of Development'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'left'}
                    />
                    <StepsCard
                        number={6}
                        title={'Overview of Development'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        stroke={'left'}
                    />
                </div>
            </div>
        </div>
    );
};
