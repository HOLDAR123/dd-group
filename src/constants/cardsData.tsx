import {CardItemType} from "../types/CardItemType";
import RetireIcon from "../assets/icons/services/RetireIcon";
import AnalysisIcon from "../assets/icons/services/AnalysisIcon";
import ComplaintIcon from "../assets/icons/services/ComplaintIcon";
import JudgeInterestsIcon from "../assets/icons/services/JudgeInterestsIcon";
import ExecutiveDevelopmentIcon from "../assets/icons/services/ExecutiveDevelopmentIcon";
import HelpAccidentIcon from "../assets/icons/services/HelpAccidentIcon";
import CustomersProtectIcon from "../assets/icons/services/CustomersProtectIcon";
import PropertyDisputesIcon from "../assets/icons/services/PropertyDisputesIcon";
import CreditDisputesIcon from "../assets/icons/services/CreditDisputesIcon";
import OweProtectionIcon from "../assets/icons/services/OweProtectionIcon";
import WorkDisputesIcon from "../assets/icons/services/WorkDisputesIcon";
import InheritDisputes from "../assets/icons/services/InheritDisputes";
import FamilyDisputesIcon from "../assets/icons/services/FamilyDisputesIcon";
import HousingDisputesIcon from "../assets/icons/services/HousingDisputesIcon";
import BankruptcryFacesIcon from "../assets/icons/services/BankruptcryFacesIcon";
import GetOweIcon from "../assets/icons/services/GetOweIcon";
import LawyerIcon from "../assets/icons/services/LawyerIcon";

export const cardsData: CardItemType[] = [
    {
        id: 1,
        headline: "Юридические консультации",
        icon: <LawyerIcon/>,
        listServices: [
            "Консультация юриста по телефону",
            "Консультация юриста по электронной почте"
        ],
    },
    {
        id: 3,
        headline: "Анализ и составление договоров",
        icon: <AnalysisIcon/>,
        listServices: [
            "Юридическая экспертиза договора",
            "Протокол разногласий к договору",
            "Разработка договоров"
        ],
    },
    {
        id: 4,
        headline: "Составление иска/жалобы",
        icon: <ComplaintIcon/>,
        listServices: [
            "Составление искового заявления в суд",
            "Составление жалобы в государственные структуры",
        ],
    },
    {
        id: 5,
        headline: "Представление интересов в суде",
        icon: <JudgeInterestsIcon/>,
        listServices: [
            "Составление отзыва на исковое заявление",
            "Составление иска в суд",
            "Представительство в суде",
            "Обжалование решений суда",
        ],
    },
    {
        id: 6,
        headline: "Исполнительное производство",
        icon: <ExecutiveDevelopmentIcon/>,
        listServices: [
            "Сопровождение исполнительного производства",
            "Оспаривание действий частных судебных исполнителей",
            "Отмена судебного приказа",
            "Изменение порядка исполнения"
        ],
    },
    {
        id: 8,
        headline: "Защита прав потребителя",
        icon: <CustomersProtectIcon/>,
        listServices: [
            "Составление претензионного письма продавцу",
            "Составление искового заявления в суд",
            "Расчёт и взыскание неустойки",
            "Возврат товара продавцу"
        ],
    },
    {
        id: 9,
        headline: "Имущественные споры",
        icon: <PropertyDisputesIcon/>,
        listServices: [
            "Признание права собственности",
            "Выделение доли",
            "Истребование имущества",
            "Определение порядка пользования имуществом"
        ],
    },
    {
        id: 10,
        headline: "Кредитные споры",
        icon: <CreditDisputesIcon/>,
        listServices: [
            "Представление интересов в суде с кредитором",
            "Помощь при возникновении просрочки платежа",
            "Анализ кредитного договора"
        ],
    },
    {
        id: 11,
        headline: "Защита должника",
        icon: <OweProtectionIcon/>,
        listServices: [
            "Оспаривание долговых обязательств",
            "Банкротство должника",
            "Представление интересов должника в суде",
        ],
    },
    {
        id: 12,
        headline: "Взыскание задолженности",
        icon: < GetOweIcon/>,
        listServices: [
            "Составление претензии",
            "Составление и подача иска в суд",
            "Банкротство должника",
        ],
    },
    {
        id: 13,
        headline: "Трудовые споры",
        icon: <WorkDisputesIcon/>,
        listServices: [
            "Споры по выплатам работнику",
            "Защита прав при незаконном увольнении",
            "Анализ трудового договора/ГПХ",
            "Прочие споры по трудовым отношениям"
        ],
    },
    {
        id: 15,
        headline: "Семейные споры",
        icon: <FamilyDisputesIcon/>,
        listServices: [
            "Расторжение брака",
            "Раздел имущества супругов",
            "Лишение родительских прав",
            "Установление отцовства"
        ],
    },
    {
        id: 17,
        headline: "Банкротство физических лиц",
        icon: <BankruptcryFacesIcon/>,
        listServices: [
            "Заявление о признании физлица банкротом",
            "Последствия банкротства физического лица",
            "Процедура банкротства физлица",
            "Реструктуризация долгов физлица"
        ],
    },
];
