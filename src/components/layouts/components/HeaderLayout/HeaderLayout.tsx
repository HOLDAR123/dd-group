import s from './HeaderLayout.module.scss';
import InstagramIcon from "../../../../assets/icons/socials/InstagramIcon";
import WhatsAppIcon from "../../../../assets/icons/socials/WhatsAppIcon";
import { navigationList } from "../../../../constants/navigationList";
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/logo.svg';
import { useEffect, useMemo, useState } from "react";
import Container from "../../../Container/Container";
import HamburgerIcon from "../../../../assets/icons/common/HamburgerIcon";
import CloseIcon from "../../../../assets/icons/common/CloseIcon";
import Modal from "../../../Modal";

export default function HeaderLayout() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    const socialMediaList = useMemo(() => [{
        id: 1,
        icon: <WhatsAppIcon />,
        link: "https://wa.me/77751887942?text=",
    },
        {
            id: 2,
            icon: <InstagramIcon />,
            link: "https://wa.me/77751887942?text=",
        },
    ], []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 747);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpenModal = () => {
        setIsActive((prev) => !prev);
    }

    return (
        <header className={s.header}>
            <Container>
                <section className={s.header__content}>
                    <section className={s.header__content__leftPart}>
                        <section className={s.header__content__leftPart__logo}>
                            <img src={logo} alt="logo" className={s.header__content__leftPart__logo_img} />
                        </section>
                    </section>
                    {isMobile ?
                        <>
                            <button onClick={handleOpenModal}>{isActive ? <CloseIcon /> : <HamburgerIcon />}</button>
                            <Modal isActive={isActive} onClose={handleOpenModal}>
                                <nav>
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
                                                <Link to={elem.link} target='_blank' key={elem.id}>
                                                    <li className={s.header__content__rightPart__socials__list_item}>{elem.icon}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </section>
                                </nav>
                            </Modal>
                        </> :
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
                                        <Link to={elem.link} target='_blank' key={elem.id}>
                                            <li className={s.header__content__rightPart__socials__list_item}>{elem.icon}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </section>
                        </nav>
                    }
                </section>
            </Container>
        </header>
    );
}
