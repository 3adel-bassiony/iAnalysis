import PrimaryLayout from '@layouts/PrimaryLayout/PrimaryLayout';
import { useState } from 'react';
import Chart from '../components/Chart';
import Filter from '../components/Filter';
import Summary from '../components/Summary';
import useFetchAnalytics from '../hooks/useFetchItems';

export default function Dashboard(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { data, isLoading } = useFetchAnalytics();

    const [country, setCountry] = useState('Kenya');
    const [camp, setCamp] = useState('Kakuma');
    const [school, setSchool] = useState('');
    const [selectedSchools, setSelectedSchools] = useState(['Burke High School', 'Jolie Boarding School']);

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <PrimaryLayout title="Dashboard" isLoading={isLoading}>
            <div className="space-y-8">
                <Filter
                    analytics={data}
                    country={country}
                    setCountry={setCountry}
                    camp={camp}
                    setCamp={setCamp}
                    school={school}
                    setSchool={setSchool}
                />

                <div className="grid lg:grid-cols-3 h-96 gap-8">
                    <Chart analytics={data} selectedSchools={selectedSchools} className="lg:col-span-2" />
                    <Summary
                        analytics={data}
                        country={country}
                        camp={camp}
                        school={school}
                        selectedSchools={selectedSchools}
                        setSelectedSchools={setSelectedSchools}
                    />
                </div>
            </div>
        </PrimaryLayout>
    );
}
