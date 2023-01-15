import React from 'react';
import s from './Top.module.scss'

export const Top = () => {
    return (
        <div className={s.Top}>
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
                <button>
                    <a href={'#'} className={s.button}>
                        Start my career change
                    </a>
                </button>
                </div>
                <div className={s.developer}>
                    Developer
                </div>
            </div>
            <div className={s.bottom}>Courses</div>
        </div>
    );
};
