import React from 'react';
import {StepsCard} from "./StepsCard/StepsCard";
import classNames from "classnames";
import {StepsLine} from "./StepsLine/StepsLine";
import s from './Steps.module.scss';
import {BackgroundSteps} from "./BackgroundDecoration/BackgroundSteps";

export const Steps = () => {
    return (
        <section className={s.Steps} id={'steps-block'}>
            <BackgroundSteps />
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
        </section>
    );
};
