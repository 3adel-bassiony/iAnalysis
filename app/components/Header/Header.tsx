import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import useTranslations from '@hooks/useTranslations';

export default function Header(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="py-6 bg-cyan-700 dark:bg-cyan-900 text-white">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className="font-mono">{t.Analysis_Chart}</h1>

                    <div className="flex items-center space-s-4">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </div>
    );
}
