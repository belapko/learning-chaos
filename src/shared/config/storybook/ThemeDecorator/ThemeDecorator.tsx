import '@/app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/theme';

export const ThemeDecorator: Decorator = (Story: StoryFn, { parameters }) => (
	<div className={`app ${parameters.theme || Theme.LIGHT}`} style={{ height: '100vh' }}>
		<Story />
	</div>
);
