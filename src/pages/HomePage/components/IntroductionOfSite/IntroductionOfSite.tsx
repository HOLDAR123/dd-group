import s from './IntroductionOfSite.module.scss'

import mainImage from '../../../../assets/images/mainImage.jpg'
import Divider from "../../../../components/Divider";
import Button from "../../../../components/UI/Button";
import ConsultationIcon from "../../../../assets/icons/common/ConsultationIcon";
import {FadeInUpFast} from "../../../../components/Animation";

export default function IntroductionOfSite() {
    return (
        <section className={s.introductionOfSite}>
            <section className={s.introductionOfSite__content}>
                <img alt={"mainImage"} src={mainImage} className={s.introductionOfSite__content_img}/>
                <section className={s.introductionOfSite__content__info}>
                    <FadeInUpFast>
                        <span className={s.introductionOfSite__content__info_subtitle}>
                        ВЫСОКОКВАЛИФИЦИРОВАННЫЕ
                    </span>
                    </FadeInUpFast>
                    <FadeInUpFast>
                    <span className={s.introductionOfSite__content__info_title}>
                        ЮРИДИЧЕСКИЕ УСЛУГИ
                    </span>
                    </FadeInUpFast>
                        <Divider/>
                    <FadeInUpFast>
                    <span className={s.introductionOfSite__content__info_services}>
                        По следующим направлениям: уголовные дела, имущественные и не имущественные споры, бракоразводные споры, трудовые споры, наследственные споры
                    </span>
                    </FadeInUpFast>
                    <FadeInUpFast>
                        <section>
                            <Button>
                                <ConsultationIcon/>
                                Бесплатная консультация
                            </Button>
                        </section>
                    </FadeInUpFast>
                </section>
            </section>
        </section>
    )
}