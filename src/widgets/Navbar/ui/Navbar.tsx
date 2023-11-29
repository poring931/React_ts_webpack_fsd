import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import { Modal } from 'shared/uikit/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores minima neque! Aut eligendi et facilis illum iste, laboriosam modi molestiae natus nemo porro possimus provident quisquam soluta tempore ut.
                становился <a target="_blank" href="https://disk.yandex.ru/i/KyLuIxPMHDbzrw" rel="noreferrer">ПРОБЛЕМА С ЦВЕТОМ. какая-то ерунда у него там</a>
            </Modal>
        </nav>
    );
};
