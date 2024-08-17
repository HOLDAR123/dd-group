import s from './MainLayout.module.scss'
import HeaderLayout from "../components/HeaderLayout";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div className={s.mainLayout}>
            <HeaderLayout/>
            <section className={s.mainLayout__content}>
                <Outlet/>
            </section>
        </div>
    )
}