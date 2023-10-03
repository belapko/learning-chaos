import { Input } from '@/shared/ui/input/Input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');

	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			<h1>{t('Main page')}</h1>
			<Input label='Тест' value={value} onChange={onChange} />
		</div>
	);
};

export default MainPage;
