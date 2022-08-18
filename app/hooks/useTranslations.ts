import { useRouter } from 'next/router';

import en from '@translations/en';
import ar from '@translations/ar';

type UseTranslationsReturn = {
    t: typeof en | typeof ar;
    locale: string | undefined;
};

export default function useTranslations(): UseTranslationsReturn {
    // ----------------------------------------------------------------------------------------------------
    // Hook States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const router = useRouter();
    const t = router?.locale === 'en' ? en : ar;

    // ----------------------------------------------------------------------------------------------------
    // Hook Return
    // ----------------------------------------------------------------------------------------------------
    return { t, locale: router?.locale };
}
