import { useEffect } from 'react';
import useTranslations from '@hooks/useTranslations';
import { Theme } from '@context/theme/enums/Theme';
import useThemeContext from '@context/theme/hooks/useThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeSwitcher(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();
    const { theme, changeTheme } = useThemeContext();

    // ----------------------------------------------------------------------------------------------------
    // Component Side Effects
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (theme === Theme.Light) {
            document.documentElement.className = 'light';
        } else {
            document.documentElement.className = `dark`;
        }
    }, [theme]);

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    if (theme === Theme.Light) {
        return (
            <button
                type="button"
                className="bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-full text-sm flex items-center space-s-2"
                onClick={() => changeTheme(Theme.Dark)}
            >
                <MoonIcon className="w-4 h-4" />
                <p>{t.Dark_Mode}</p>
            </button>
        );
    }
    return (
        <button
            type="button"
            className="bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-full text-sm flex items-center space-s-2"
            onClick={() => changeTheme(Theme.Light)}
        >
            <SunIcon className="w-4 h-4" />
            <p>{t.Light_Mode}</p>
        </button>
    );
}
