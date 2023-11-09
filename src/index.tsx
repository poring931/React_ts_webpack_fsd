import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.querySelector('#root')
);

// 21 [SuperSliv.biz] 21 Несуществующие маршруты. Лоадер для загрузки страниц
