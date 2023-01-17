import React from 'react';
import s from './BlurEllipse.module.scss';
import classNames from "classnames";

export const BlurEllipse = ({className}: {className?: string}) => {
    return (
        <div className={classNames(s.BlurEllipse, className)}>
        </div>
    );
};