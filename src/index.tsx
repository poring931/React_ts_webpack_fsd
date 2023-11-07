import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    ,
    document.querySelector('#root')
)
;

// 15 l[SuperSliv.biz] 15 i18n Интернационализация. Define plugin. Плагин для переводов
