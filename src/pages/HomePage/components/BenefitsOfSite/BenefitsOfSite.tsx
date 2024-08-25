import Container from "../../../../components/Container/Container";
import s from './BenefitsOfSite.module.scss'
import GraduationHatIcon from "../../../../assets/icons/benefits/GraduationHatIcon";
import TeamIcon from "../../../../assets/icons/benefits/TeamIcon";
import LawIcon from "../../../../assets/icons/benefits/LawIcon";
import {useEffect, useState} from "react";
import {FadeInUpFast} from "../../../../components/Animation";

export default function BenefitsOfSite() {
    const [approvedCustomers, setApprovedCustomers] = useState<number>(0);
    const [successfulDeals, setSuccessfulDeals] = useState<number>(0);

    useEffect(() => {
        const customersInterval = setInterval(() => {
            setApprovedCustomers(prev => {
                if (prev >= 50) {
                    clearInterval(customersInterval);
                    return 50;
                }
                return prev + 1;
            });
        }, 50);

        const dealsInterval = setInterval(() => {
            setSuccessfulDeals(prev => {
                if (prev >= 150) {
                    clearInterval(dealsInterval);
                    return 150;
                }
                return prev + 1;
            });
        }, 50);

        return () => {
            clearInterval(customersInterval);
            clearInterval(dealsInterval);
        };
    }, [approvedCustomers, successfulDeals])

    const benefitsData = [
        {
            id: 1,
            title: "Стаж 6 лет",
            icon: <GraduationHatIcon/>
        },
        {
            id: 2,
            title: `Нам доверяют более ${approvedCustomers}+`,
            icon: <TeamIcon/>
        },
        {
            id: 3,
            title: `Успешных дел ${successfulDeals}+`,
            icon: <LawIcon/>
        }
    ];

    return (
        <div className={s.wrapper}>
            <Container>
                <section className={s.benefits}>
                    <ul className={s.benefits__list} >
                        {benefitsData.map((elem, index) => (
                            <FadeInUpFast key={elem.id} delay={index * 400}>
                                <li className={s.benefits__list__item}>
                                    <div className={s.benefits__list__item_icon}>
                                        {elem.icon}
                                    </div>
                                    <span className={s.benefits__list__item_title}>
                                        {elem.title}
                                    </span>
                                </li>
                            </FadeInUpFast>
                        ))}
                    </ul>
                </section>
            </Container>
        </div>
    )
}
