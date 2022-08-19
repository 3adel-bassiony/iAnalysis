import { useEffect, useState } from 'react';
import _ from 'lodash';
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import useTranslations from '@hooks/useTranslations';
import { Analytics } from '../types/Analytics';

type SummaryProps = {
    analytics: Analytics[];
    country: string;
    camp: string;
    school: string;
    selectedSchools: string[];
    setSelectedSchools: (schools: string[]) => void;
    className?: string;
};
export default function Summary({
    analytics,
    country,
    camp,
    school,
    selectedSchools,
    setSelectedSchools,
    className,
}: SummaryProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();
    const [filteredSchools, setFilteredSchools] = useState([]);

    const schools = _.chain(analytics)
        .groupBy('school')
        .map((value, key) => ({ school: key, data: value }))
        .value();

    // ----------------------------------------------------------------------------------------------------
    // Component Functions
    // ----------------------------------------------------------------------------------------------------
    const toggleSchool = (s: string) => {
        const newArr = _.xor(selectedSchools, [s]);
        setSelectedSchools(newArr);
    };

    // ----------------------------------------------------------------------------------------------------
    // Component Side Effects
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (school.length > 0) {
            setFilteredSchools(_.filter(analytics, { country, camp, school }));
        } else {
            setFilteredSchools(_.filter(analytics, { country, camp }));
        }
    }, [country, camp, school]);

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className={`dark:bg-slate-800 bg-white p-8 rounded-lg h-[40rem] overflow-scroll shadow ${className}`}>
            <div>
                <p className="text-xl text-cyan-800">
                    {_.sumBy(filteredSchools, 'lessons')} {t.Lessons}
                </p>
                <p className="text-black dark:text-white">
                    {t.In} {camp}
                </p>
            </div>

            <div className="space-y-4 mt-8">
                {schools.map((item) => (
                    <button
                        key={item.school}
                        type="button"
                        className={`flex items-center gap-4 ${
                            selectedSchools.includes(item.school)
                                ? 'text-cyan-600 dark:text-cyan-400'
                                : 'text-slate-800 dark:text-slate-100'
                        }`}
                        onClick={() => toggleSchool(item.school)}
                    >
                        {selectedSchools.includes(item.school) ? (
                            <CheckCircleIcon className="w-6 h-6" />
                        ) : (
                            <PlusCircleIcon className="w-6 h-6" />
                        )}

                        <div className="text-start">
                            <p className="text-lg text-start">
                                {item.data.reduce((accumulator, object) => {
                                    return accumulator + object.lessons;
                                }, 0)}{' '}
                                {t.Lessons}
                            </p>
                            <p className="text-xs text-start">
                                {t.In} {item.school}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

Summary.defaultProps = {
    className: '',
};
