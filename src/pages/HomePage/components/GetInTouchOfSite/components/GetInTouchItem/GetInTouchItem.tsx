import {GetInTouchType} from "../../../../../../types/GetInTouchType";

import s from './GetInTouchItem.module.scss'

type GetInTouchItemProps = {
    data: GetInTouchType
}

export default function GetInTouchItem({data}: GetInTouchItemProps) {
    return (
        <div className={s.getInTouchItem}>
            <div className={s.getInTouchItem__header}>
                <div className={s.getInTouchItem__header_icon}>
                    {data.icon}
                </div>
                <div className={s.getInTouchItem__header_heading}>
                    {data.heading}
                </div>
            </div>
            <div className={s.getInTouchItem__content}>
                {data.subTitle}
            </div>
        </div>
    )
}