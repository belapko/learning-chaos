import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/user';
import { loginReducer } from '@/features/auth-username/model/slice/loginSlice';

// reusable store. Can be reused is sb, jest and others
export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		user: userReducer,
		LoginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

const appStore = createReduxStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
