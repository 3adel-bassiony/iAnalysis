import { render } from '@testing-library/react';

import Summary from '../components/Summary';

describe('<Summary />', () => {
    test('Should Render <Summary /> component without crashing', () => {
        render(
            <Summary
                analytics={[]}
                country="Egypt"
                camp="Omaka"
                school="Burke High School"
                selectedSchools={[]}
                setSelectedSchools={() => {}}
            />
        );
    });
});
