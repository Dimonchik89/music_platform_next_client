import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import Head from "next/head";

interface Props {
    children: React.ReactNode;
    title?: string;
    description: string;
    keywords: string;
}

const MainLayout: React.FC<Props> = ({children, title, description, keywords}) => {

    return (
        <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={'Музыкальная лощадка, здессь можно прослушать музыку' + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Музыка, треки, артист"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: "90px auto"}}>
                {children}
            </Container>
            <Player/>
        </>
    )
}

export default MainLayout;