import { Button } from 'shared/uikit/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

// для тестового вызова ошибки
export const BugButton = ({ className= '' }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};

