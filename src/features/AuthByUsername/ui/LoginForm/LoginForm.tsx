import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}/>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите password')}/>
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </form>
    );
};

