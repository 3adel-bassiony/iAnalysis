import { render } from '@testing-library/react';

import Hero from '../components/Hero';

describe('<Hero />', () => {
    test('Should Render <Hero /> component without crashing', () => {
        render(<Hero />);
    });
});
