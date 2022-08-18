import { render } from '@testing-library/react';

import Home from '../pages/Home';

describe('<Home />', () => {
    test('Should Render <Home /> page without crashing', () => {
        render(<Home />);
    });
});
