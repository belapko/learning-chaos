import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth-username';

export interface StateSchema {
	user: UserSchema;
	loginForm?: LoginSchema; // optional param for lazy loading store, reducer
}
