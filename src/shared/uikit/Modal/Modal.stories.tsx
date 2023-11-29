import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modals',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'asdasdl,m231lp4mrfopsdmfskdofmk',
        isOpen: true
    },
};
export const Dark: Story = {
    args: {
        children: 'asdasdl,m231lp4mrfopsdmfskdofmk',
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
