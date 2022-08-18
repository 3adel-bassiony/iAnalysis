import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Header/Header';

type PrimaryLayoutProps = {
    children: ReactNode;
    className?: string;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    type?: string;
    url?: string;
};

export default function PrimaryLayout({
    className,
    children,
    title,
    description,
    keywords,
    image,
    type,
    url,
}: PrimaryLayoutProps): JSX.Element {
    return (
        <>
            {/* Head */}
            <Head>
                {title && <title>{title}</title>}
                {description && <meta name="description" content={description} />}
                {keywords && <meta name="keywords" content={keywords} />}

                {/* OpenGraph Tags */}
                {url && <meta property="og:url" content={url} />}
                {type && <meta property="og:type" content={type} />}
                {title && <meta property="og:title" content={title} />}
                {description && <meta property="og:description" content={description} />}
                {image && <meta property="og:image" content={image} />}

                {/* Twitter Tags */}
                {type && <meta property="twitter:card" content="summary_large_image" />}
                {title && <meta property="twitter:title" content={title} />}
                {description && <meta property="twitter:description" content={description} />}
                {image && <meta property="twitter:image" content={image} />}
            </Head>

            {/* Children */}
            <div className={className}>
                <Header />
                <div>{children}</div>
            </div>
        </>
    );
}

PrimaryLayout.defaultProps = {
    className: null,
    title: null,
    description: null,
    keywords: null,
    image: null,
    type: null,
    url: null,
};
