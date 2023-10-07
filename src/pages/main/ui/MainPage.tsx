import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/text/Text';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<div>
			<h1>{t('Main page')}</h1>
			<Text title='title' paragraph='some error message' />
		</div>
	);
};

export default MainPage;
