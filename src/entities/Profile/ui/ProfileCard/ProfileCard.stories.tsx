import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard,
    title: 'entities/ProfileCard',
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar: avatar
        }
    },
};
export const Loading: Story = {
    args: {
        isLoading: true
    },
};
export const withError: Story = {
    args: {
        error: 'true'
    },
};
