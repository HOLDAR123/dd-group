import {ReactNode} from "react";

import s from './Button.module.scss'
import classNames from "classnames";

type ButtonProps = {
    children: ReactNode;
    typeButton?: 'outline' | 'default'
}

export default function Button ({children, typeButton = 'outline' , ...props}:ButtonProps) {
    return (
        <button {...props} className={classNames({
            [s.button]: true,
            [s.button_outline]: typeButton === 'outline',
            [s.button_default]: typeButton === 'default',
        })}>
            <div className={s.button_content}>
                {children}
            </div>
        </button>
    )
}