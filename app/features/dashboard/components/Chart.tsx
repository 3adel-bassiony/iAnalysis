import { MouseEvent, useRef } from 'react';
import _ from 'lodash';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import useTranslations from '@hooks/useTranslations';
import { Analytics } from '../types/Analytics';

type ChartProps = {
    analytics: Analytics[];
    selectedSchools: string[];
    className?: string;
};

export default function Chart({ analytics, selectedSchools, className }: ChartProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const chartRef = useRef();
    const { t, locale } = useTranslations();

    const filteredSchools = _.filter(analytics, (item) => selectedSchools.includes(item.school));

    const schools = _.chain(filteredSchools)
        .groupBy('school')
        .map((value, key) => ({ school: key, data: value }))
        .value();

    const options = {
        responsive: true,
        locale,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: t.No_Of_Lessons,
            },
            subtitle: {
                display: true,
                text: `${selectedSchools.length}`,
            },
        },
    };

    const labels = [t.Jan, t.Feb, t.Mar, t.Apr, t.May, t.Jun, t.Jul, t.Aug, t.Sep, t.Oct, t.Nov, t.Dec];

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const data = {
        labels,
        datasets: schools.map((item) => ({
            label: item.school,
            data: item.data.map((i) => i.lessons),
            borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        })),
    };

    // ----------------------------------------------------------------------------------------------------
    // Component Functions
    // ----------------------------------------------------------------------------------------------------
    const onClick = (event: MouseEvent) => {
        console.log(event);
        // console.log(getElementAtEvent(chartRef.current, event));
    };

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className={className}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg h-[40rem] shadow">
                {selectedSchools.length ? (
                    <Line ref={chartRef} options={options} data={data} onClick={onClick} />
                ) : (
                    <div>
                        <p className="text-center mt-8 text-slate-800 dark:text-white">{t.Empty_Chart_Message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

Chart.defaultProps = {
    className: '',
};
