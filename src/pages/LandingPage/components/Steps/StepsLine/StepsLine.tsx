import React from 'react';
import s from './StepsLine.module.scss';
import Image from "next/image";

export const StepsLine = () => {
    return (
        <div className={s.StepsLine}>
            <div className={s.middleLine}></div>
            <div className={s.arrows}>
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.firstArrow}
                />
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.secondsArrow}
                />
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.thirdArrow}
                />
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.fourthArrow}
                />
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.fifthArrow}
                />
                <Image
                    width={'94'}
                    height={'24'}
                    src={'/stepsArrow.svg'}
                    alt={'arrow icon'}
                    className={s.sixthArrow}
                />
            </div>
        </div>
    );
};
