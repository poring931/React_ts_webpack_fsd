import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export const TranslationDecorator =(StoryComponent: Story) => (
    <I18nextProvider i18n={i18nForTests}><StoryComponent /></I18nextProvider>
);
