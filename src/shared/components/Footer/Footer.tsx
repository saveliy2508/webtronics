import React from 'react';
import s from './Footer.module.scss'
import Image from "next/image";

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <footer className={s.Footer}>
                <div className={s.requisites}>
                    <div className={s.logo}>
                        <Image
                            width={'168'}
                            height={'33'}
                            src={'/logo.svg'}
                            alt={'logo'}
                        />
                    </div>
                    <div className={s.address}>Wisconsin Ave, Suite 700 <br/> Chevy Chase, Maryland 20815</div>
                </div>
                <div className={s.company}>
                    <div className={s.title}>Company</div>
                    <div className={s.list}>
                        <div className={s.column}>
                            <a href={'#'} className={s.columnItem}>About Us</a>
                            <a href={'#'} className={s.columnItem}>Steps</a>
                            <a href={'#'} className={s.columnItem}>FAQs</a>
                        </div>
                        <div className={s.column}>
                            <a href={'#'} className={s.columnItem}>Review</a>
                            <a href={'#'} className={s.columnItem}>Gallery</a>
                        </div>
                    </div>
                </div>
                <div className={s.social}>
                    <div className={s.title}>Social media</div>
                    <div className={s.icons}>
                        <Image
                            width={'22'}
                            height={'22'}
                            src={'/facebookIcon.svg'}
                            alt={'logo'}
                        />
                        <Image
                            width={'22'}
                            height={'22'}
                            src={'/gitlabIcon.svg'}
                            alt={'logo'}
                        />
                        <Image
                            width={'22'}
                            height={'22'}
                            src={'/twitterIcon.svg'}
                            alt={'logo'}
                        />
                        <Image
                            width={'22'}
                            height={'22'}
                            src={'/linkedinIcon.svg'}
                            alt={'logo'}
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};
