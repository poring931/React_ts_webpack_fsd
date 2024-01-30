import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'feature/LoginForm',
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

