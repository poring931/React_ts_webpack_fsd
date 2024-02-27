import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'Pages/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
