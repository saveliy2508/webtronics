import React from 'react';
import s from './BackgroundSteps.module.scss';
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const BackgroundSteps = () => {
    return (
        <>
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
        </>
    );
};
