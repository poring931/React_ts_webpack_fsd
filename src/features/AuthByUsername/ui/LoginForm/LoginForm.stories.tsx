import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'feature/LoginForm',
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123d',
        }
    })],
};

export const WithError: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123d',
            error: 'Шо-то пошло не так',
        }
    })],
};

export const IsLoading: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123d',
            isLoading: true,
        }
    })],
};

