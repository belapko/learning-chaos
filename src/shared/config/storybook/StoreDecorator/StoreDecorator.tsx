import { Decorator, StoryFn } from '@storybook/react';
import { StoreProvider } from '@/app/providers/store';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/StateSchema';
import { loginReducer } from '@/features/auth-username/model/slice/loginSlice';

const defaultAsyncRedcuers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator: Decorator = (Story: StoryFn, { parameters }) => (
	<StoreProvider initialState={parameters?.state} asyncReducers={defaultAsyncRedcuers}>
		<Story />
	</StoreProvider>
);
