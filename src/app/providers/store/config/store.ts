import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

// reusable store. Can be reused is sb, jest and others
export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
