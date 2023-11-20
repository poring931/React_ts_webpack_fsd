import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {

    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {

    decorators: [ThemeDecorator(Theme.DARK)],

};
