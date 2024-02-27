import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    component: CurrencySelect,
    title: 'Entities/CurrencySelect',
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Small: Story = {
    args: {

    },
};
