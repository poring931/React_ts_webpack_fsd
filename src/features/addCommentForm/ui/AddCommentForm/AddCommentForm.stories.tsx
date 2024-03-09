
import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
    component: AddCommentForm,
    title: 'feature/AddCommentForm',
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {
        // onSendComment: action('onSendComment'),
    },

};
