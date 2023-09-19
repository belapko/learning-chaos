import ReactDOM from 'react-dom/client';
import App from '@/app';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n'; // needs to be bundled

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
