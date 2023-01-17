import React from 'react';
import s from './Top.module.scss'
import {Button} from "shared/components/Button";

export const Top = () => {
    return (
        <section className={s.Top}>
            <div className={s.topRow}>
                <div className={s.frontend}>
                    Front-end
                </div>
                <div className={s.text}>
                    Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps
                    teach (and more).
                </div>
            </div>
            <div className={s.bottomRow}>
                <div className={s.buttonWrapper}>
                    <Button>
                        <a href={'#contact-block'} className={s.button}>
                            Start my career change
                        </a>
                    </Button>
                </div>
                <div className={s.developer}>
                    Developer
                </div>
            </div>
            <div className={s.bottom}>Courses</div>
        </section>
    );
};
