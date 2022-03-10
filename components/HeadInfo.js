import Head from 'next/head';

const HeadInfo = ({title, keyword, content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword}/>
            <meta contents={content}/>
        </Head>
    );
}

HeadInfo.defaultProps={
    title: 'My Blog',
    keyword: 'Blog powered by Next js',
    contents: 'practice next js'
}

export default HeadInfo;