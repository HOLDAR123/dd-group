import s from './Divider.module.scss'

export default function Divider() {
    return (
        <div className={s.divider}>
                <span className={s.divider_line}/>
                <span className={s.divider_circle}/>
                <span className={s.divider_line}/>
        </div>
    )
}