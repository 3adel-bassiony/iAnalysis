import { render } from '@testing-library/react';

import Dashboard from '../pages/Dashboard.page';

describe('<Dashboard />', () => {
    test('Should Render <Dashboard /> page without crashing', () => {
        render(<Dashboard />);
    });
});
