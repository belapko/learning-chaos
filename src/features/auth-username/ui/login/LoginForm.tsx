import styles from './loginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation('navbar');
	return (
		<div className={classNames(styles.form, [className])}>
			<Input type='text' label='Имя пользователя' />
			<Input type='password' label='Пароль' />
			<Button theme={ButtonTheme.OUTLINE} onClick={() => {}}>
				{t('Sign in')}
			</Button>
		</div>
	);
};
