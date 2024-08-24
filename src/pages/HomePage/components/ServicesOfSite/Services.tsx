import s from './Services.module.scss'
import {cardsData} from "../../../../constants/cardsData";
import Container from "../../../../components/Container/Container";
import CardItem from "./components/CardItem";
import {FadeInUpFast} from "../../../../components/Animation";

export default function Services() {
    return (
        <Container>
            <section className={s.services}>
                <section className={s.services_cards}>
                    {cardsData.map((elem, index) => (
                        <FadeInUpFast delay={index * 100}>
                            <CardItem data={elem}/>
                        </FadeInUpFast>
                    ))}
                </section>
            </section>
        </Container>
    )
}