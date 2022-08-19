import { render } from '@testing-library/react';

import Filter from '../components/Filter';

describe('<Filter />', () => {
    test('Should Render <Filter /> component without crashing', () => {
        render(
            <Filter
                analytics={[]}
                country="Egypt"
                setCountry={() => {}}
                camp="Omaka"
                setCamp={() => {}}
                school="Burke High School"
                setSchool={() => {}}
            />
        );
    });
});
