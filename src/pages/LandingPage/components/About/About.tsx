import React from 'react';
import s from './About.module.scss'
import {MentorsCard} from "pages/LandingPage/components/About/MentorsCard";
import Image from "next/image";
import classNames from "classnames";

export const About = () => {
    return (
        <div className={s.About} id={'about-block'}>
            <div className={s.title}>About us</div>
            <div className={s.content}>
                <div className={s.mentors}>
                    <div className={s.title}>
                        Mentors
                    </div>
                    <Image
                        width={'394'}
                        height={'156'}
                        src={'/mentorsLine.svg'}
                        alt={'logo'}
                    />
                    <div className={s.cards}>
                        <MentorsCard
                            src={'/WadeWarren.png'}
                            name={'Wade Warren'}
                            description={'Front-end engineers work closely with designers'}
                            className={s.mentorsCard}
                        />
                        <MentorsCard
                            src={'/KristinWatson.png'}
                            name={'Kristin Watson'}
                            description={'Front-end engineers work closely with designers'}
                            className={classNames(s.mentorsCard, s.centerCard)}
                        />
                        <MentorsCard
                            src={'/RobertFox.png'}
                            name={'Robert Fox'}
                            description={'Front-end engineers work closely with designers'}
                            className={s.mentorsCard}
                        />
                    </div>
                </div>
                <div className={s.text}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                    This
                    Career Path will teach you not only the necessary languages and technologies, but how to think like
                    a
                    front-end engineer, too.
                </div>
            </div>
        </div>
    );
};
