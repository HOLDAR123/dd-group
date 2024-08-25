import React from 'react';
import s from './Modal.module.scss';
import CloseIcon from "../../assets/icons/common/CloseIcon";
import classNames from "classnames";

interface ModalProps {
    isActive: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({isActive, onClose, children}: ModalProps) {
    return (
        <div className={classNames({
            [s.modal]: true,
            [s.noActive]: !isActive,
            [s.active]: isActive
        })}>
            <div className={s.modal__content}>
                <button className={s.modal__close} onClick={onClose}><CloseIcon/></button>
                {children}
            </div>
        </div>
    );
};

