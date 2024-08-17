import { ReactNode } from "react";
import s from './Container.module.scss';

type ContainerProps = {
    children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return (
        <section className={s.container}>
            {children}
        </section>
    );
}
