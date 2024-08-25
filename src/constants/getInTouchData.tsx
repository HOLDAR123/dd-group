import {GetInTouchType} from "../types/GetInTouchType";
import PhoneIcon from "../assets/icons/common/PhoneIcon";
import WorkHoursIcon from "../assets/icons/common/WorkHoursIcon";

export const getInTouchData: GetInTouchType[] = [{
    heading: "Позвоните Нам",
    subTitle: "номер телефона: +7 707 308 4803",
    icon: <PhoneIcon/>
},
    {
        heading: "Рабочие Часы",
        subTitle: "Пн-Пт ...... 10:00-18:00, сб-вс ...... выходной",
        icon: <WorkHoursIcon/>
    },
]