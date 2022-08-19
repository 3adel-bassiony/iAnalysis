import { render } from '@testing-library/react';

import Chart from '../components/Chart';

describe('<Chart />', () => {
    test('Should Render <Chart /> component without crashing', () => {
        render(<Chart analytics={[]} selectedSchools={[]} />);
    });
});
