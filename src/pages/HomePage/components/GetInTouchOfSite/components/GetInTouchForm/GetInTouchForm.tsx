import s from './GetInTouchForm.module.scss'
import Input from "../../../../../../components/UI/Input";
import Button from "../../../../../../components/UI/Button";

export default function GetInTouchForm () {
    return (
        <div className={s.getInTouchForm}>
            <span className={s.getInTouchForm_heading}>
                Связаться с нами
            </span>
            <form className={s.getInTouchForm__form}>
                <Input placeholder="Введите Ваше Имя" type={"text"}/>
                <Input placeholder="Введите Вашу Почту" type={"email"}/>

                <div className={s.getInTouchForm__footer}>
                    <Button type={"submit"} typeButton="default">
                        Связаться
                    </Button>
                </div>
            </form>
        </div>
    )
}