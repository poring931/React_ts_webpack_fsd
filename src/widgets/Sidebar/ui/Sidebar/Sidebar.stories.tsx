import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'widgets/Sidebar',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {

    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {

    decorators: [ThemeDecorator(Theme.DARK)],

};
