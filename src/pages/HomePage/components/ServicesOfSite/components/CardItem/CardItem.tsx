import {CardItemType} from "../../../../../../types/CardItemType";

import s from './CardItem.module.scss'

type CardItemProps = {
    data: CardItemType
}

export default function CardItem({data}: CardItemProps) {
    return (
        <div className={s.cardItem} key={data.id}>
            <div className={s.cardItem__header}/>
            <div className={s.cardItem__iconWrapperCircle}>
                <div className={s.cardItem__iconWrapperCircle__iconWrapper}>
                    <div className={s.cardItem__iconWrapperCircle__iconWrapper_icon}>
                        {data.icon}
                    </div>
                </div>
            </div>
            <div className={s.cardItem__footer}>
                  <span className={s.cardItem__footer_headline}>
                    {data.headline}
                </span>
                <ul className={s.cardItem__footer__list}>
                    {data.listServices.map((elem) => (
                        <li className={s.cardItem__footer__list_textBody}>
                            {elem}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}