import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const router = useRouter();
    const dir = router?.locale === 'ar' ? 'rtl' : 'ltr';

    // ----------------------------------------------------------------------------------------------------
    // App Configurations
    // ----------------------------------------------------------------------------------------------------
    // Axios Config
    // axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_URL;
    axios.defaults.headers.common['Accept-Language'] = router?.locale;

    // ----------------------------------------------------------------------------------------------------
    // Component Side Effects
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <ThemeProvider attribute="class">
            <SWRConfig
                value={{
                    fetcher: (url) => axios.get(url).then((res) => res.data),
                    revalidateIfStale: true,
                    revalidateOnFocus: true,
                    refreshInterval: 0,
                    shouldRetryOnError: false,
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>
        </ThemeProvider>
    );
}

export default MyApp;
