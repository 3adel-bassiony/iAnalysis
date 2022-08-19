import useTranslations from '@hooks/useTranslations';

export default function Loader(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="bg-gradient-to-br from-cyan-800 via-purple-500 to-cyan-500 absolute top-0 left-0 w-full h-full z-50">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="text-center text-white">
                    <h1 className="text-3xl">{t.Loader_Title}</h1>
                    <p>{t.Loader_Message}</p>
                </div>
            </div>
        </div>
    );
}
