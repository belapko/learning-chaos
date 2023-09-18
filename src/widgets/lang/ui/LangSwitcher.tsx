import { classNames } from '@/shared/lib/classNames';
import styles from './lang.module.scss';
import { Button } from '@/shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(styles.lang, [className])}>
            <Button className={styles.lang} onClick={toggleLang}>
                {i18n.language}
            </Button>
        </div>
    );
};
