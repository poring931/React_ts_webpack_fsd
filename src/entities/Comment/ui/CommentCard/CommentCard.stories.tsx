import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof CommentCard> = {
    component: CommentCard,
    title: 'shared/Links',
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {

    },
};
