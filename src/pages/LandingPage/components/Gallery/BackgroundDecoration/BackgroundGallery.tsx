import React from 'react';
import s from './BackgroundGallery.module.scss';
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const BackgroundGallery = () => {
    return (
        <>
            <BlurEllipse className={s.ellipse1}/>
            <BlurEllipse className={s.ellipse2}/>
            <Image
                width={'21'}
                height={'24'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar1}
            />
            <Image
                width={'21'}
                height={'24'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallStar2}
            />
            <Image
                width={'28'}
                height={'32'}
                src={'/bigBackgroundStar.png'}
                alt={'star'}
                className={s.bigStar}
            />
        </>
    );
};
