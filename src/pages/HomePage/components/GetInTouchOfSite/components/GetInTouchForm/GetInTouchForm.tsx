import React, { useState } from 'react';
import s from './GetInTouchForm.module.scss';
import Input from '../../../../../../components/UI/Input';
import Button from '../../../../../../components/UI/Button';

export default function GetInTouchForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api.ddgroup.kz/mail/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                alert('Сообщение отправлено!');
                setName('');
                setEmail('');
            } else {
                alert('Ошибка при отправке сообщения.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке сообщения.');
        }
    };

    return (
        <div className={s.getInTouchForm}>
            <span className={s.getInTouchForm_heading}>Связаться с нами</span>
            <form className={s.getInTouchForm__form} onSubmit={handleSubmit}>
                <Input
                    placeholder="Введите Ваше Имя"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="Введите Вашу Почту"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={s.getInTouchForm__footer}>
                    <Button type="submit" typeButton="default">
                        Связаться
                    </Button>
                </div>
            </form>
        </div>
    );
}
