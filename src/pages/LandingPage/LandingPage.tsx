import React from 'react';
import {Header} from "shared/components/Header";
import {Footer} from "shared/components/Footer";
import {Top} from "./components/Top";
import {About} from "./components/About/About";
import {Technologies} from "pages/LandingPage/components/Technologies";
import s from './LandingPage.module.scss';
import {Steps} from "pages/LandingPage/components/Steps";

export const LandingPage = () => {
    return (
        <div className={s.LandingPage}>
            <div className={s.container}>
                <Header/>
                <Top/>
                <About/>
                <Technologies />
                <Steps />
            </div>
            <Footer/>
        </div>
    );
};
