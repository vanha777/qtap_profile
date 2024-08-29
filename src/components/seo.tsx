import Head from 'next/head';

const SEO = ({
    title,
    bio,
    imageUrl,
    url,
    name
}: {
    title?: string;
    bio?: string;
    imageUrl?: string;
    url?: string;
    name?: string;
}) => (
    <Head>
        <title>{`Digital Business Profile: ${name} - ${title}`}</title>
        <meta name="description" content={bio} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={bio} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
    </Head>
);

export default SEO;