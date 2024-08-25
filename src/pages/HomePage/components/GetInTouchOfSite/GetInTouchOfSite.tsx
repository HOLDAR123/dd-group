import s from './GetInTouchOfSite.module.scss'
import {getInTouchData} from "../../../../constants/getInTouchData";
import GetInTouchItem from "./components/GetInTouchItem/GetInTouchItem";
import Container from "../../../../components/Container/Container";
import GetInTouchForm from "./components/GetInTouchForm";
import {FadeInUpFast} from "../../../../components/Animation";

export default function GetInTouchOfSite() {
    return (
        <section className={s.getInTouchOfSite}>
            <Container>
                <section className={s.getInTouchOfSite__content}>
                    <section className={s.getInTouchOfSite__content__leftPart}>
                        {getInTouchData.map((elem, index) => (
                            <FadeInUpFast delay={index * 200}>
                                <GetInTouchItem data={elem}/>
                            </FadeInUpFast>
                        ))}
                    </section>
                    <section className={s.getInTouchOfSite__content__rightPart}>
                            <GetInTouchForm/>
                    </section>
                </section>
            </Container>
        </section>
    )
}