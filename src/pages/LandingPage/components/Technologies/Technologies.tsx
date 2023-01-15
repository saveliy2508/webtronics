import React from 'react';
import s from './Technologies.module.scss'
import {TechnologiesCard} from "pages/LandingPage/components/Technologies/TechnologiesCard";

export const Technologies = () => {
    return (
        <div className={s.Technologies}>
            <div className={s.title}>Programming technologies</div>
            <div className={s.text}>
                <div className={s.textContainer}>
                    By the end, you’ll have the portfolio and interview skills you need to start your new career.
                </div>
            </div>
            <div className={s.cards}>
                <TechnologiesCard src={'/angularLogo.png'} name={'Angular'}/>
                <TechnologiesCard src={'/reactLogo.png'} name={'React'}/>
                <TechnologiesCard src={'/vueLogo.png'} name={'Vue'}/>
                <TechnologiesCard src={'/javascriptLogo.png'} name={'Javascript'}/>
            </div>
        </div>
    );
};
