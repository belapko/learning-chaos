import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent';

describe('Sidebar', () => {
	test('sidebar', () => {
		// const SidebarWithTranslation = withTranslation()(Sidebar); // HOC can be used to test translation instead of own component
		renderTestComponent(<Sidebar />);
		// render(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('toggle', () => {
		renderTestComponent(<Sidebar />);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleButton); // clicking button to show additional sidebar info
		expect(screen.getByTestId('sidebar')).toHaveClass('show');
	});
});
