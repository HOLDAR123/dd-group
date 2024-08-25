import s from './ReviewsOfSite.module.scss'
import {reviewsData} from "../../../../constants/reviewsData";
import ReviewItem from "./components/ReviewItem";
import Marquee from "react-fast-marquee";
import {useEffect, useState} from "react";
import {FadeInUpFast} from "../../../../components/Animation";

export default function ReviewsOfSite() {
    const [speed, setSpeed] = useState<number>(250);

    useEffect(() => {
        if (window && window.innerWidth && window.innerWidth < 768) {
            setSpeed(100)
        } else {
            setSpeed(250)
        }
    }, [])

    return (
        <div className={s.reviewsOfSite}>
            <Marquee pauseOnHover={true} speed={speed} className={s.reviewsOfSite_slider}>
                {reviewsData.map((elem, index) => (
                    <FadeInUpFast delay={index * 100}>
                        <div className={s.reviewsOfSite_slider_item}>
                            <ReviewItem data={elem}/>
                        </div>
                    </FadeInUpFast>
                ))
                }
            </Marquee>
        </div>
    )
}