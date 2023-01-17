import React from 'react';
import s from './BackgroundQuestions.module.scss';
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const BackgroundQuestions = () => {
    return (
        <>
            <BlurEllipse className={s.ellipse}/>
            <Image
                width={'14'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar}
            />
            <Image
                width={'21'}
                height={'24'}
                src={'/mediumBackgroundStar.png'}
                alt={'star'}
                className={s.mediumStar}
            />
        </>
    );
};
