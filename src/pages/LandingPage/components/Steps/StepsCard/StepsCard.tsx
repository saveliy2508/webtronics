import React from 'react';
import classNames from "classnames";
import s from './StepsCard.module.scss'

interface StepsCardProps {
    number: number;
    title: string;
    description: string;
    stroke: 'right' | 'left';
}

export const StepsCard = ({number, title, description, stroke}: StepsCardProps) => {
    return (
        <div className={classNames(s.stroke, stroke === 'right' ? s.strokeRight : s.strokeLeft)}>
            <div className={s.strokeGradientWrapper}>
                <div className={s.cardWrapper}>
                    <div className={s.StepsCard}>
                        <div className={s.number}>
                            Step {number}
                        </div>
                        <div className={s.title}>
                            {title}
                        </div>
                        <div className={s.description}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
