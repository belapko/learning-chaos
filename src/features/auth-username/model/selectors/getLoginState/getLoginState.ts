import { StateSchema } from '@/app/providers/store/config/StateSchema';

export const getUsernameState = (state: StateSchema) => state?.LoginForm.username;
export const getPasswordState = (state: StateSchema) => state?.LoginForm.password;

export const getLoginRequestState = (state: StateSchema) => ({
	error: state?.LoginForm.error,
	isLoading: state?.LoginForm.isLoading,
});
