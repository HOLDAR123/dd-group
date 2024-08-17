import s from './IntroductionOfSite.module.scss'

import mainImage from '../../../../assets/images/mainImage.jpg'
import Divider from "../../../../components/Divider";

export default function IntroductionOfSite () {
    return (
        <section className={s.introductionOfSite}>
            <section className={s.introductionOfSite__content}>
                <img alt={"mainImage"}  src={mainImage} className={s.introductionOfSite__content_img}/>
                <section className={s.introductionOfSite__content__info}>
                    <span className={s.introductionOfSite__content__info_subtitle}>
                        ВЫСОКОКВАЛИФИЦИРОВАННЫЕ
                    </span>
                    <span className={s.introductionOfSite__content__info_title}>
                        ЮРИДИЧЕСКИЕ УСЛУГИ
                    </span>
                    <Divider/>
                </section>
            </section>
        </section>
    )
}