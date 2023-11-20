import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'widgets/Loaders',
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Clear: Story = {
    args: {
        children: 'Text',
    },
};
