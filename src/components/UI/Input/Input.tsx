import React from 'react';
import s from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
    return (
        <div className={s.wrapper}>
            <input className={s.input} {...props} />
        </div>
    );
}
