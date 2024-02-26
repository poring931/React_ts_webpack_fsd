import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page404.module.scss';
import { useTranslation } from 'react-i18next';
interface Page404Props {
    className?: string;
}

export const Page404 = ({ className = '' }: Page404Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.page404, {}, [className])}>
            {t('404. Страница не найдена')}
        </div>
    );
};

