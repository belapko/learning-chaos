import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './loginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation('navbar');
	return (
		<div className={classNames(styles.form, [className])}>
			<input type='text' />
			<input type='password' />
			<Button theme={ButtonTheme.OUTLINE} onClick={() => {}}>
				{t('Sign in')}
			</Button>
		</div>
	);
};
