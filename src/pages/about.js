import React from 'react'
import Head from 'next/head'

const About = (props) => {
    return (
        <>
            <Head>
                <title>About page</title>
                <meta name="description" content="This is the about page" />
            </Head>
            <main>
                <h1>{props.title}</h1>
            </main>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            title: "About page"
        }
    }
}

export default About