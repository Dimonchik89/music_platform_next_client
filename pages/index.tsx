import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import main from "../styles/main.module.scss";

const Index = () => {

    return (
        <>
            <MainLayout>
                <div className={main.center}>
                    <h1>Welcome</h1>
                </div>
            </MainLayout>
        </>
    )
}

export default Index;