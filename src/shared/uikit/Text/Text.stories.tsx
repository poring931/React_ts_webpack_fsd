import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Texts',
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Заголовок, если нужен',
        text: 'Текст, если нужен',
        theme: TextTheme.PRIMARY
    },
};
export const Error: Story = {
    args: {
        title: 'Заголовок, если нужен',
        text: 'Текст, если нужен',
        theme: TextTheme.ERROR
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Текст, если нужен'
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок, если нужен',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Заголовок, если нужен',
        text: 'Текст, если нужен'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Текст, если нужен'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Заголовок, если нужен',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

