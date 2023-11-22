import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof LanguageSwitcher> = {
    component: LanguageSwitcher,
    title: 'widgets/LanguageSwitchers',
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Normal: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
