import ReactDOM from 'react-dom/client';
import App from '@/app';
import '@/shared/config/i18n/i18n'; // needs to be bundled
import { ThemeProvider } from '@/app/providers/theme';
import { ErrorBoundary } from '@/app/providers/error';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ThemeProvider>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</ThemeProvider>
);
