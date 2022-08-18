import useTranslations from '@hooks/useTranslations';

export default function Hero(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="text-center py-24 font-mono">
            <h1 className="text-6xl">{t.Hello_World}</h1>
            <p className="mx-auto text-slate-700 mt-4 text-md">This is an example of a project created with the following technologies:</p>
            <ul className="inline-block space-x-8 text-sm text-cyan-900 font-bold mt-6 cursor-pointer">
                <li className="inline hover:underline">TailwindCSS</li>
                <li className="inline hover:underline">JEST</li>
                <li className="inline hover:underline">ESLint</li>
                <li className="inline hover:underline">Prettier</li>
                <li className="inline hover:underline">Axios & useSWR</li>
                <li className="inline hover:underline">Multi-lang</li>
            </ul>
            <p className="mx-auto text-slate-700 mt-20">
                Created By:{' '}
                <a href="https://github.com/3adel-bassiony" className="text-cyan-500 hover:text-cyan-900 hover:underline">
                    Adel Bassiony
                </a>
            </p>
        </div>
    );
}
