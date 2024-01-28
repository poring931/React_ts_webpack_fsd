import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const closeModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const showModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED}  onClick={showModal}>
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={closeModal}
            />
        </nav>
    );
};
