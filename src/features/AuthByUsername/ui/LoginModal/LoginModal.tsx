import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Modal } from 'shared/uikit/Modal/Modal';
// import { LoginForm } from '../LoginForm/LoginForm';
import { Loader } from 'widgets/Loader/ui/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className = '', isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.loginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
        {/* <LoginForm /> */}
    </Modal>
);
