import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from '@/pages/error';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		console.log(error, info.componentStack); // instead of console.log use logger or others on prod
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback=''>
					<ErrorPage />
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
