import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
	test('test default button render', () => {
		render(<Button onClick={() => {}}>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('button clear theme', () => {
		render(
			<Button theme={ButtonTheme.CLEAR} onClick={() => {}}>
				TEST
			</Button>
		);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});

	test('button bordered theme', () => {
		render(
			<Button theme={ButtonTheme.BORDERED} onClick={() => {}}>
				TEST
			</Button>
		);
		expect(screen.getByText('TEST')).toHaveClass('bordered');
		screen.debug();
	});
});
