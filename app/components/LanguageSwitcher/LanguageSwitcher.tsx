import { useRouter } from 'next/router';

export default function LanguageSwitcher(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const router = useRouter();
    const { pathname, asPath, query } = router || { pathname: null, asPath: null, query: null };
    const languages = [
        {
            locale: 'en',
            name: 'English',
        },
        {
            locale: 'ar',
            name: 'العربية',
        },
    ];

    // ----------------------------------------------------------------------------------------------------
    // Component Functions
    // ----------------------------------------------------------------------------------------------------
    // Change Next.js Language
    const chnageLanguage = (nextLocale: string) => {
        router.push({ pathname, query }, asPath, { locale: nextLocale });
    };

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <>
            {languages
                .filter((language) => language.locale !== router?.locale)
                .map((language) => (
                    <button
                        key={language.locale}
                        type="button"
                        className="bg-cyan-800 dark:bg-cyan-800 hover:bg-cyan-900 dark:hover:bg-cyan-700 px-4 py-2 rounded-full text-sm"
                        onClick={() => chnageLanguage(language.locale)}
                    >
                        {language.name}
                    </button>
                ))}
        </>
    );
}
