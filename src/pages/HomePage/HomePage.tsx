import s from './HomePage.module.scss'
import IntroductionOfSite from "./components/IntroductionOfSite";
import Services from "./components/ServicesOfSite";
import Divider from "../../components/Divider";
import BenefitsOfSite from "./components/BenefitsOfSite";
import {FadeInUpFast} from "../../components/Animation";

export default function HomePage() {
    return (
        <section className={s.homePage}>
            <IntroductionOfSite/>
            <FadeInUpFast delay={300}>
                <section className={s.homePage_heading}>
                    <span>Наши Плюсы</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <BenefitsOfSite/>
            <FadeInUpFast delay={300}>
                <section className={s.homePage_heading}>
                    <span>Наши Услуги</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <Services/>
        </section>
    )
}