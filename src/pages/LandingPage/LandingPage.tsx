import React from 'react';
import Header from "../../shared/components/Header/Header";
import s from './LandingPage.module.scss';
import {Footer} from "shared/components/Footer";
import {Top} from "pages/LandingPage/components/Top";

export const LandingPage = () => {
    return (
        <div className={s.LandingPage}>
            <div className={s.container}>
                <Header/>
                <Top/>
            </div>
            <Footer/>
        </div>
    );
};

export default LandingPage;
