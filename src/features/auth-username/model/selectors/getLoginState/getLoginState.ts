import { StateSchema } from '@/app/providers/store/config/StateSchema';

export const getUsernameState = (state: StateSchema) => state?.loginForm?.username || '';
export const getPasswordState = (state: StateSchema) => state?.loginForm?.password || '';

export const getLoginRequestState = (state: StateSchema) => ({
	error: state?.loginForm?.error || '',
	isLoading: state?.loginForm?.isLoading || false,
});
