import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

// eslint-disable-next-line react/display-name
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.item__icon} />
            <span className={cls.item__text}>
                {t(item.text)}
            </span>

        </AppLink>
    );
});
