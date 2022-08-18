import PrimaryLayout from '@layouts/PrimaryLayout/PrimaryLayout';
import Hero from '../components/Hero';

export default function Home(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <PrimaryLayout title="Home">
            <Hero />
        </PrimaryLayout>
    );
}
