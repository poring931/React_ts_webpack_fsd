import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'Pages/ProfilePage',
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'kasdfv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            }
        }
    })],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'kasdfv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            }
        }
    })],
};
