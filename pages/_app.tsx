import axios from 'axios';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const router = useRouter();

    // ----------------------------------------------------------------------------------------------------
    // App Configurations
    // ----------------------------------------------------------------------------------------------------
    // Axios Config
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_URL;
    axios.defaults.headers.common['Accept-Language'] = router?.locale;

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
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
    );
}

export default MyApp;
