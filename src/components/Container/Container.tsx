import { ReactNode, HTMLAttributes } from "react";
import s from './Container.module.scss';

type ContainerProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Container({ children, ...props }: ContainerProps) {
    return (
        <section className={s.container} {...props}>
            {children}
        </section>
    );
}
