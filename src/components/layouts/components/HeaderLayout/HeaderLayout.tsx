import s from './HeaderLayout.module.scss';
import {navigationList} from "../../../../constants/navigationList";
import {Link} from "react-router-dom";
import logo from '../../../../assets/images/logo.svg';
import {useEffect, useState} from "react";
import Container from "../../../Container/Container";
import HamburgerIcon from "../../../../assets/icons/common/HamburgerIcon";
import {socialsData} from "../../../../constants/socialsData";
import Modal from "../../../Modal";

export default function HeaderLayout() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

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
                            <img src={logo} alt="logo" className={s.header__content__leftPart__logo_img}/>
                        </section>
                    </section>
                    {isMobile ?
                        <>
                            <button onClick={handleOpenModal}><HamburgerIcon/></button>
                            <Modal isActive={isActive} onClose={handleOpenModal}>
                                <nav className={s.navvv}>
                                    <ul className={s.header__content__rightPart__navigation__list}>
                                        {navigationList.map((elem) => (
                                            <a onClick={handleOpenModal} href={elem.link} key={elem.id}>
                                                <li className={s.header__content__rightPart__navigation__list_item}>
                                                    {elem.name}
                                                </li>
                                            </a>
                                        ))}
                                    </ul>

                                    <section className={s.header__content__rightPart__socials}>
                                        <ul className={s.header__content__rightPart__socials__list}>
                                            {socialsData.map((elem) => (
                                                <a href={elem.link} target='_blank' key={elem.id}>
                                                    <li className={s.header__content__rightPart__socials__list_item}>{elem.icon}</li>
                                                </a>
                                            ))}
                                        </ul>
                                    </section>
                                </nav>
                            </Modal>
                        </> :
                        <nav className={s.header__content__rightPart}>
                            <ul className={s.header__content__rightPart__navigation__list}>
                                {navigationList.map((elem) => (
                                    <a href={elem.link} key={elem.id}>
                                        <li className={s.header__content__rightPart__navigation__list_item}>
                                            {elem.name}
                                        </li>
                                    </a>
                                ))}
                            </ul>

                            <section className={s.header__content__rightPart__socials}>
                                <ul className={s.header__content__rightPart__socials__list}>
                                    {socialsData.map((elem) => (
                                        <a href={elem.link} target='_blank'  key={elem.id}>
                                            <li className={s.header__content__rightPart__socials__list_item}>{elem.icon}</li>
                                        </a>
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
