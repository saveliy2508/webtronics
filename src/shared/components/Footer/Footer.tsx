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
                            <a href={'#about-block'} className={s.columnItem}>About Us</a>
                            <a href={'#steps-block'} className={s.columnItem}>Steps</a>
                            <a href={'#questions-block'} className={s.columnItem}>FAQs</a>
                        </div>
                        <div className={s.column}>
                            <a href={'#review-block'} className={s.columnItem}>Review</a>
                            <a href={'#gallery-block'} className={s.columnItem}>Gallery</a>
                        </div>
                    </div>
                </div>
                <div className={s.social}>
                    <div className={s.title}>Social media</div>
                    <div className={s.icons}>
                        <a href={'https://facebook.com'} target={'_blank'}>
                            <Image
                                width={'22'}
                                height={'22'}
                                src={'/facebookIcon.svg'}
                                alt={'logo'}
                            />
                        </a>
                        <a href={'https://gitlab.com'} target={'_blank'}>
                            <Image
                                width={'22'}
                                height={'22'}
                                src={'/gitlabIcon.svg'}
                                alt={'logo'}
                            />
                        </a>
                        <a href={'https://twitter.com'} target={'_blank'}>
                            <Image
                                width={'22'}
                                height={'22'}
                                src={'/twitterIcon.svg'}
                                alt={'logo'}
                            />
                        </a>
                        <a href={'https://linkedin.com'} target={'_blank'}>
                            <Image
                                width={'22'}
                                height={'22'}
                                src={'/linkedinIcon.svg'}
                                alt={'logo'}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
