import s from './HeaderLayout.module.scss'
import InstagramIcon from "../../../../assets/icons/socials/InstagramIcon";
import WhatsAppIcon from "../../../../assets/icons/socials/WhatsAppIcon";
import {navigationList} from "../../../../constants/navigationList";
import {Link} from "react-router-dom";

import logo from '../../../../assets/images/logo.svg'
import {useMemo} from "react";

export default function HeaderLayout() {
    const socialMediaList = useMemo(() => [{
        id: 1,
        icon: <WhatsAppIcon/>,
        link: "https://wa.me/77751887942?text=",
    },
        {
            id: 2,
            icon: <InstagramIcon/>,
            link: "https://wa.me/77751887942?text=",
        },
    ], [])

    return (
        <header className={s.header}>
            <section className={s.header__content}>
                <section className={s.header__content__leftPart}>
                    <section className={s.header__content__leftPart__logo}>
                        <img src={logo} alt="logo" className={s.header__content__leftPart__logo_img}/>
                    </section>
                </section>
                <nav className={s.header__content__rightPart}>
                    <ul className={s.header__content__rightPart__navigation__list}>
                        {navigationList.map((elem) => (
                            <Link to={elem.link} key={elem.id}>
                                <li className={s.header__content__rightPart__navigation__list_item}>
                                    {elem.name}
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <section className={s.header__content__rightPart__socials}>
                        <ul className={s.header__content__rightPart__socials__list}>
                            {socialMediaList.map((elem) => (
                                <Link to={elem.link} target='_blank'>
                                    <li className={s.header__content__rightPart__socials__list_item}>{elem.icon}</li>
                                </Link>
                            ))
                            }
                        </ul>
                    </section>
                </nav>
            </section>
        </header>
    )
}