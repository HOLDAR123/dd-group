import s from './ReviewItem.module.scss'
import {ReviewItemType} from "../../../../../../types/ReviewItemType";
import StarIcon from "../../../../../../assets/icons/common/StarIcon";

type ReviewItemProps = {
    data: ReviewItemType
}

export default function ReviewItem({data}: ReviewItemProps) {
    return (
        <div className={s.reviewItem}>
            <div className={s.reviewItem__content}>
                <div className={s.reviewItem__content__header}>
                    <div className={s.reviewItem__content__header_review}>
                        {data.comment}
                    </div>
                </div>
                <div className={s.reviewItem__content__footer}>
                    <div className={s.reviewItem__content__footer__wrapper_name}>
                        <span className={s.reviewItem__content__footer__wrapper_name}>
                        {data.name}
                    </span>
                        <div className={s.reviewItem__content__footer__wrapper_rating}>
                            {Array.from({length: data.rating}, (_, index) => (
                                <StarIcon key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}