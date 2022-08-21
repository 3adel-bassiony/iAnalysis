import useTranslations from '@hooks/useTranslations';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeSwitcher(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();
    const { theme, setTheme } = useTheme();

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <button
            type="button"
            className="bg-cyan-800 dark:bg-cyan-800 hover:bg-cyan-900 dark:hover:bg-cyan-700 px-4 py-2 rounded-full text-sm flex items-center space-s-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
            <p className="hidden lg:block">{theme === 'light' ? t.Dark_Mode : t.Light_Mode}</p>
        </button>
    );
}
