import s from './HomePage.module.scss'
import IntroductionOfSite from "./components/IntroductionOfSite";
import Services from "./components/ServicesOfSite";
import Divider from "../../components/Divider";
import BenefitsOfSite from "./components/BenefitsOfSite";
import {FadeInUpFast} from "../../components/Animation";
import ReviewsOfSite from "./components/ReviewsOfSite";
import GetInTouchOfSite from "./components/GetInTouchOfSite/GetInTouchOfSite";

export default function HomePage() {
    return (
        <section className={s.homePage}>
            <IntroductionOfSite/>
            <div id="advantage"/>
            <FadeInUpFast delay={300}>
                <section className={s.homePage_heading}>
                    <span>Наши Плюсы</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <BenefitsOfSite/>
            <div id="services"/>
            <FadeInUpFast delay={300} >
                <section className={s.homePage_heading} >
                    <span>Наши Услуги</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <Services/>

            <div id="reviews"/>
            <FadeInUpFast delay={300}>
                <section className={s.homePage_heading}>
                    <span>Наши Отзывы</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <ReviewsOfSite/>
            <FadeInUpFast delay={300}>
                <section className={s.homePage_heading}>
                    <span>Напишите Нам</span>
                    <Divider/>
                </section>
            </FadeInUpFast>
            <GetInTouchOfSite/>
        </section>
    )
}