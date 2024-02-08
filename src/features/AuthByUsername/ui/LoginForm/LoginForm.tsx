import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginstate } from '../../model/selectors/getLoginstate/getLoginstate';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/uikit/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
export interface LoginFormProps {

    className?: string;
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const { username, password, error, isLoading } = useSelector(getLoginstate);

    useEffect(()=>{
        store.reducerManager.add('loginForm', loginReducer);
        return () =>{
            store.reducerManager.remove('loginForm');
        };
        // eslint-disable-next-line
    }, []);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text theme={TextTheme.ERROR} text={error}/>}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </form>
    );
});

export default LoginForm;
