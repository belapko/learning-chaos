import '@/app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/theme';
// TODO: pass theme as param
export const ThemeDecorator: Decorator = (Story: StoryFn, theme) =>
	(
		<div className={`app ${theme.parameters.theme || Theme.LIGHT}`} style={{height: '100vh'}}>
			<Story />
		</div>
	);
