import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import { render, screen } from '@testing-library/react';

describe('classNames', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
