import React from 'react';
import Header from "../../shared/components/Header/Header";
import s from './LandingPage.module.scss'
import {Footer} from "shared/components/Footer";

export const LandingPage = () => {
    return (
        <div className={s.LandingPage}>
            <div className={s.container}>
                <main className={s.mainContent}>
                    <Header/>
                    {/*<Top />*/}
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default LandingPage;
