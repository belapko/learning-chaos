import { useTranslation } from 'react-i18next';
import styles from './notFound.module.scss';

export const NotFoundPage = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.notFoundPage}>
			<h1>{t('PageNotFound')}</h1>
		</div>
	);
};
