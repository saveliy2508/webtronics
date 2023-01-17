import React from 'react';
import Image from "next/image";
import s from './TechnologiesCard.module.scss';

interface TechnologiesCardProps {
    src: string;
    name: string;
}

export const TechnologiesCard = ({src, name}: TechnologiesCardProps) => {
    return (
        <div className={s.borderWrapper}>
            <div className={s.TechnologiesCard}>
                <Image
                    width={'162'}
                    height={'136'}
                    src={src}
                    alt={name}
                    className={s.image}
                />
                <div className={s.name}>
                    {name}
                </div>
            </div>
        </div>
    );
};
