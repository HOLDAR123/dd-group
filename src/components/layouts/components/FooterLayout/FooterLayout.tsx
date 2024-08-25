import s from './FooterLayout.module.scss'

import logo from '../../../../assets/images/logo.svg'
import {socialsData} from "../../../../constants/socialsData";
import {Link} from "react-router-dom";
import Container from "../../../Container/Container";

export default function FooterLayout() {
    return (
        <footer className={s.footer} id="footer">
            <Container>
                <section className={s.footer__content}>
                    <section className={s.footer__content__leftPart}>
                        <section className={s.footer__content__leftPart__logo}>
                            <img src={logo} className={s.footer__content__leftPart__logo_img}/>
                        </section>
                        <section className={s.footer__content__leftPart__info}>
                        <span className={s.footer__content__leftPart__info_number}>

                        </span>
                        </section>
                    </section>
                    <section className={s.footer__content__rightPart}>
                        <ul className={s.footer__content__rightPart__socialList}>
                            {socialsData.map((elem) => (
                                <Link to={elem.link} key={elem.id}>
                                    <li className={s.footer__content__rightPart__socialList_item}>
                                        {elem.icon}
                                    </li>
                                </Link>
                            ))

                            }
                        </ul>
                    </section>
                </section>
            </Container>
        </footer>
    )
}