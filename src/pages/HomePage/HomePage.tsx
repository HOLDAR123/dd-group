import s from './HomePage.module.scss'
import IntroductionOfSite from "./components/IntroductionOfSite";

export default function HomePage () {
    return(
        <section className={s.homePage}>
            <IntroductionOfSite/>
        </section>
    )
}