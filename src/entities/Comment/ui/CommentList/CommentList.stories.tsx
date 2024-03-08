import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof CommentList> = {
    component: CommentList,
    title: 'shared/Links',
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {

    },
};
