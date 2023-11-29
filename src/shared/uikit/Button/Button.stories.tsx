import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Buttons',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};
export const Square: Story = {
    args: {
        children: '►',
        theme: ButtonTheme.BACKGROUND,
        square: true
    },
};
export const SquareSizeL: Story = {
    args: {
        children: '►',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '►',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL
    },
};
