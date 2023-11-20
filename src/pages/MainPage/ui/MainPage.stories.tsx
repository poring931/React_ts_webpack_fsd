import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'Pages/MainPage',
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    args: {
        children: 'Text',
    },
};
export const Dark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
