import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof PageError> = {
    component: PageError,
    title: 'widgets/PageErrors',
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Clear: Story = {
    args: {
    },
};
