import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/providers/store/config/store';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
