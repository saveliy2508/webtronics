import React from 'react';
import s from './BackgroundAbout.module.scss';
import {BlurEllipse} from "shared/components/BlurEllipse";
import Image from "next/image";

export const BackgroundAbout = () => {
    return (
        <>
            <BlurEllipse className={s.firstEllipse}/>
            <BlurEllipse className={s.secondEllipse}/>
            <Image
                width={'35'}
                height={'40'}
                src={'/bigBackgroundStar.png'}
                alt={'star'}
                className={s.bigStar}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallFirstStar}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallSecondStar}
            />
            <Image
                width={'15'}
                height={'17'}
                src={'/smallBackgroundStar.png'}
                alt={'star'}
                className={s.smallThirdStar}
            />
        </>
    );
};
