import { Decorator, StoryFn } from '@storybook/react';
import { StoreProvider } from '@/app/providers/store';

export const StoreDecorator: Decorator = (Story: StoryFn, {parameters}) => (
	<StoreProvider initialState={parameters?.state}>
		<Story />
	</StoreProvider>
);
