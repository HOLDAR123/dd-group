import s from './MainLayout.module.scss'
import HeaderLayout from "../components/HeaderLayout";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div className={s.mainLayout}>
            <header className={s.mainLayout__header}>
                <HeaderLayout/>
            </header>
            <section className={s.mainLayout__content}>
                <Outlet/>
            </section>
        </div>
    )
}