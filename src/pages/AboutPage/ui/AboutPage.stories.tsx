import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: 'Pages/AboutPage',
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

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
