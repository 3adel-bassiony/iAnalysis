import _ from 'lodash';
import useTranslations from '@hooks/useTranslations';
import { Analytics } from '../types/Analytics';

type FilterProps = {
    analytics: Analytics[];
    country: string;
    setCountry: (country: string) => void;
    camp: string;
    setCamp: (camp: string) => void;
    school: string;
    setSchool: (school: string) => void;
};

export default function Filter({ analytics, country, setCountry, camp, setCamp, school, setSchool }: FilterProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();

    const countries = _.uniqBy(analytics, 'country');
    const camps = _.uniqBy(analytics, 'camp');
    const schools = _.uniqBy(analytics, 'school');

    const selectClasses =
        'bg-white dark:bg-slate-700 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md';

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="grid lg:grid-cols-3 items-start gap-8">
            {/* Countries Menu */}
            <div className="space-y-1">
                <p className="block text-sm font-medium text-gray-700 dark:text-slate-300">{t.Country}</p>
                <select name="location" className={selectClasses} value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">{t.Show_All}</option>
                    {countries.map((element) => (
                        <option key={element.id} value={element.country}>
                            {element.country}
                        </option>
                    ))}
                </select>
            </div>

            {/* Camps Menu */}
            <div className="space-y-1">
                <p className="block text-sm font-medium text-gray-700 dark:text-slate-300">{t.Camp}</p>
                <select name="location" className={selectClasses} value={camp} onChange={(e) => setCamp(e.target.value)}>
                    <option value="">{t.Show_All}</option>
                    {camps.map((element) => (
                        <option key={element.id} value={element.camp}>
                            {element.camp}
                        </option>
                    ))}
                </select>
            </div>

            {/* Schools Menu */}
            <div className="space-y-1">
                <p className="block text-sm font-medium text-gray-700 dark:text-slate-300">{t.School}</p>
                <select name="location" className={selectClasses} value={school} onChange={(e) => setSchool(e.target.value)}>
                    <option value="">{t.Show_All}</option>
                    {schools.map((element) => (
                        <option key={element.id} value={element.school}>
                            {element.school}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
