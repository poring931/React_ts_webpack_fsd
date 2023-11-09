module.exports = {
    'env': {
        'browser': true,
        es2021: true
    },
    'extends': ['plugin:react/recommended', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json' // The error starts here
    },

    'plugins': ['react', '@typescript-eslint', 'i18next'],
    'rules': {
        indent: ['error', 4], // Отступы в 4 пробела
        'linebreak-style': 0,
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'nonblock-statement-body-position': ['error', 'any'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        'padded-blocks': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1
        }],
        'no-whitespace-before-property': 'error',
        'computed-property-spacing': ['error', 'never'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        'block-spacing': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        quotes: ['error', 'single'], // Одинарные кавычки для строк
        semi: ['error', 'always'], // Всегда ставим точку с запятой
        'newline-after-var': ['error', 'always'], // Всегда переносим строку после разных сигнатур
        'padding-line-between-statements': ['error', {
            blankLine: 'always',
            prev: '*',
            next: ['if', 'function', 'class']
        }] // Двойной перенос строки после блоков кода
    }
};