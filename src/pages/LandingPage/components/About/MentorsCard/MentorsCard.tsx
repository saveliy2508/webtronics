import React from 'react';
import Image from "next/image";
import classNames from "classnames";
import s from './MentorsCard.module.scss';

interface MentorsCardProps {
    src: string;
    name: string;
    description: string;
    className?: string;
}

export const MentorsCard = ({src, name, description, className}: MentorsCardProps) => {
    return (
        <div className={classNames(s.MentorsCard, [className])}>
            <div className={s.avatarGradientWrapper}>
                <Image
                    width={'184'}
                    height={'184'}
                    src={src}
                    alt={'avatar'}
                    className={s.avatar}
                />
            </div>
            <div className={s.name}>
                {name}
            </div>
            <div className={s.description}>
                {description}
            </div>
        </div>
    );
};
