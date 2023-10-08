import { FC, PropsWithChildren, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/store';
import { StateSchemaKey } from '@/app/providers/store/config/StateSchema';
import { useAppDispatch, useAppStore } from '@/shared/model';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface Props extends PropsWithChildren {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const StoreLazyLoader: FC<Props> = ({ children, reducers, removeAfterUnmount }: Props) => {
	const store = useAppStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};
