import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { createReduxStore } from '@/app/providers/store';

const appStore = createReduxStore();

export type AppStore = typeof appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore as () => AppStore;
