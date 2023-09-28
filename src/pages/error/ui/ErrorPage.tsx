import styles from './errorPage.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
	const { t } = useTranslation();

	const refreshPage = () => location.reload();

	return (
		<div className={styles.page}>
			<h1>{t('Error')}</h1>
			<Button className={styles.button} theme={ButtonTheme.OUTLINE} onClick={refreshPage}>{t('Refresh')}</Button>
		</div>
	);
};
