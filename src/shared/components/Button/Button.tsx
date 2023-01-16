import React, {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import classNames from "classnames";
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
}

export const Button = memo((props:ButtonProps) => {
    const {
        children,
        className,
        disabled,
        ...otherProps
    } = props;
    return (
        <button disabled={disabled} type="button" {...otherProps} className={classNames(s.button, {[s.disabled]: disabled}, className)}>
            {children}
        </button>
    );
});