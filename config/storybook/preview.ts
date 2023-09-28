import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: 'fullscreen',
	},
	decorators: [ThemeDecorator, RouterDecorator],
};

export default preview;
