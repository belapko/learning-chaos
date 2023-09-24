import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '@/app/providers/theme/lib/ThemeContext';
import { FC, PropsWithChildren, useMemo, useState } from 'react';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	); // memoize values of object and others to return existing instead of create new if deps array not changed

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
