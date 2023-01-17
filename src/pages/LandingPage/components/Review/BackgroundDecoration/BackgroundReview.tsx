import React from 'react';
import s from './BackgroundReview.module.scss';
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const BackgroundReview = () => {
    return (
        <>
            <BlurEllipse className={s.ellipse}/>
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
