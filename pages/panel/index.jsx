import Hero from '../../components/Panel/Hero.jsx';
import Main from '../../components/Panel/Main.jsx';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Panel | Adithi</title>
            </Head>
            <Hero />
            <Main />
        </>
    );
};