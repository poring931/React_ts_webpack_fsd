import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'Pages/ProfilePage',
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {
        // children: 'Text',
    },
    decorators: [StoreDecorator({})],

};
export const Dark: Story = {
    args: {
        // children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
