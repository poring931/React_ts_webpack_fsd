import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher, ThemeThemeSwitcher } from './ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitchers',
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

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
