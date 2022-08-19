import useSWR from 'swr';
import { Analytics } from '../types/Analytics';

type UseFetchAnalyticsReturn = {
    data: Analytics[];
    isLoading: boolean;
    error: string;
};

export default function useFetchAnalytics(): UseFetchAnalyticsReturn {
    // ----------------------------------------------------------------------------------------------------
    // Hook States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { data, error } = useSWR('https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json');

    // ----------------------------------------------------------------------------------------------------
    // Hook Return
    // ----------------------------------------------------------------------------------------------------
    return {
        data: data ?? [],
        isLoading: !data,
        error,
    };
}
