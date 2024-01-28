import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    // https://disk.yandex.ru/i/KfpO15yVJuGo0w

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
});

