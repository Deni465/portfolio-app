import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Denise Bamberg</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </div>
    );
}
