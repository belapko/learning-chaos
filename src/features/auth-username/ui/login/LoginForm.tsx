import styles from './loginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginRequestState, getPasswordState, getUsernameState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/login-username/loginByUsername';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Text } from '@/shared/ui/text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation('navbar');

	const username = useAppSelector(getUsernameState);
	const password = useAppSelector(getPasswordState);
	const {error, isLoading} = useAppSelector(getLoginRequestState);

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
		<div className={classNames(styles.form, [className])}>
			{error && <Text className={styles.width} paragraph={error} isError={true} />}
			<Input className={styles.width} type='text' label='Имя пользователя' autofocus={true} value={username} onChange={onChangeUsername} />
			<Input className={styles.width} type='password' label='Пароль' value={password} onChange={onChangePassword} />
			<Button className={styles.width} theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
				{t('Sign in')}
			</Button>
		</div>
	);
});
