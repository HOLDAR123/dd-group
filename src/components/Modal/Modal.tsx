import React from 'react';
import s from './Modal.module.scss';
import CloseIcon from "../../assets/icons/common/CloseIcon";

interface ModalProps {
    isActive: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({isActive, onClose, children}: ModalProps) {
    if (!isActive) return null;

    return (
        <div className={s.modal}>
            <div className={s.modal__content}>
                <button className={s.modal__close} onClick={onClose}><CloseIcon/></button>
                {children}
            </div>
        </div>
    );
};

