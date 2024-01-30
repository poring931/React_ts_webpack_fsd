import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'shared/Inputs',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

