import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
	test('sidebar', () => {
		// const SidebarWithTranslation = withTranslation()(Sidebar); // HOC can be used to test translation instead of own component
		renderWithTranslation(<Sidebar />);
		// render(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('toggle', () => {
		renderWithTranslation(<Sidebar />);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleButton); // clicking button to show additional sidebar info
		expect(screen.getByTestId('sidebar')).toHaveClass('show');
	});
});
