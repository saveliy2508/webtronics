import {
    ChangeEvent,
    InputHTMLAttributes,
    memo
} from 'react';
import s from './Input.module.scss';
import classNames from "classnames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    register?: any;
    error?: string;
    disabled?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className, disabled, value, onChange, type = 'text', register, error, ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <>
            <div className={classNames(s.gradientInputWrapper, {
                [s.errorWrapper]: error,
                [s.disabledWrapper]: disabled
            })}>
                <input
                    className={classNames(s.input, {[s.errorInput]: error})}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={disabled}
                    {...register}
                    {...otherProps}
                />
            </div>
            {error && <div className={s.error}>{error}</div>}
        </>
    );
});