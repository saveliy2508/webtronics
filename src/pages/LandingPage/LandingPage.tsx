import React from 'react';
import {Header} from "shared/components/Header";
import {Footer} from "shared/components/Footer";
import {Top} from "./components/Top";
import {About} from "./components/About/About";
import {Technologies} from "pages/LandingPage/components/Technologies";
import s from './LandingPage.module.scss';
import {Steps} from "pages/LandingPage/components/Steps";
import {Question} from "pages/LandingPage/components/Questions";
import {Review} from "pages/LandingPage/components/Review";
import {Gallery} from "pages/LandingPage/components/Gallery";
import {Contact} from "pages/LandingPage/components/Contact";

export const LandingPage = () => {
    return (
        <div className={s.LandingPage}>
            <div className={s.container}>
                <Header/>
                <Top/>
                <About/>
                <Technologies/>
                <Steps/>
                <Question/>
                <Review/>
                <Gallery />
                <Contact />
            </div>
            <Footer/>
        </div>
    );
};
