import Hero from '../../components/Profile/Hero.jsx';
import Main from '../../components/Profile/Main.jsx';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile | Adithi</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Main />
            </div>
        </>
    );
};