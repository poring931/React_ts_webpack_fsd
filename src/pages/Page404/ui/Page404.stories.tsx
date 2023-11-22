import type { Meta, StoryObj } from '@storybook/react';
import { Page404 } from './Page404';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Page404> = {
    component: Page404,
    title: 'Pages/Page404',
};

export default meta;
type Story = StoryObj<typeof Page404>;

export const Normal: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
