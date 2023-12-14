import Head from 'next/head'
import './globals.css'

function MyApp({ Component, PageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <Component {...PageProps} />
        </>
    )
}

export default MyApp

