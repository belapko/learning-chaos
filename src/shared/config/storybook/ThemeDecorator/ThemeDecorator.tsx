import '@/app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';

export const ThemeDecorator: Decorator = (Story: StoryFn, theme) =>
	(
		<div className={`app ${theme.parameters.theme || 'light'}`} style={{height: '100vh'}}>
			<Story />
		</div>
	);
