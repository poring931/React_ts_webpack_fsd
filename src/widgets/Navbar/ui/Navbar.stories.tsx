import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {

    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123d',
            isLoading: true,
        }
    })],
};
export const Dark: Story = {

    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123d',
            isLoading: true,
        }
    })],

};
export const Authorized: Story = {

    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: { id: 1, username: 'admin' } },
    })],

};
