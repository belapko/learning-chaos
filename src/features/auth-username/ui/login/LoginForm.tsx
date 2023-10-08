import styles from './loginForm.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/login-username/loginByUsername';
import {
	getLoginRequestState,
	getPasswordState,
	getUsernameState,
} from '../../model/selectors/getLoginState/getLoginState';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';
import { Text } from '@/shared/ui/text/Text';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { ReducersList, StoreLazyLoader } from '@/shared/lib/storeLazyLoader/StoreLazyLoader';

interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation('navbar');
	const username = useAppSelector(getUsernameState);
	const password = useAppSelector(getPasswordState);
	const { error, isLoading } = useAppSelector(getLoginRequestState);

	const dispatch = useAppDispatch();

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<StoreLazyLoader removeAfterUnmount={true} reducers={initialReducers}>
			<div className={classNames(styles.form, [className])}>
				{error && (
					<Text
						className={styles.width}
						paragraph={t('Oops! Either this is not your account, or you entered the wrong password.')}
						isError={true}
					/>
				)}
				<Input
					className={styles.width}
					type='text'
					label='Имя пользователя'
					autofocus={true}
					value={username}
					onChange={onChangeUsername}
				/>
				<Input
					className={styles.width}
					type='password'
					label='Пароль'
					value={password}
					onChange={onChangePassword}
				/>
				<Button
					className={styles.width}
					theme={ButtonTheme.OUTLINE}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('Sign in')}
				</Button>
			</div>
		</StoreLazyLoader>
	);
});

export default LoginForm;
