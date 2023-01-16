import React from 'react';
import s from './Gallery.module.scss'
import Image from "next/image";

export const Gallery = () => {
    return (
        <div className={s.Gallery} id={'gallery-block'}>
            <div className={s.title}>Gallery</div>
            <main className={s.content}>
                <div className={s.leftContent}>
                    <div className={s.text}>By the end of this course, you will be able to develop and publish your very
                        own Google Chrome extension! In this course we will focus on coding exercises and projects.
                    </div>
                    <div className={s.leftPhoto}>
                        <Image
                            width={'288'}
                            height={'434'}
                            src={'/galleryPhoto1.jpg'}
                            alt={'photo'}
                            className={s.photo}
                        />
                    </div>
                </div>
                <div className={s.rightContent}>
                    <div className={s.topRightGrid}>
                        <div className={s.leftPhoto}>
                            <Image
                                width={'600'}
                                height={'434'}
                                src={'/galleryPhoto2.jpg'}
                                alt={'photo'}
                                className={s.photo}
                            />
                        </div>
                        <div className={s.rightPhotos}>
                            <Image
                                width={'288'}
                                height={'209'}
                                src={'/galleryPhoto3.jpg'}
                                alt={'photo'}
                                className={s.photo}
                            />
                            <Image
                                width={'288'}
                                height={'209'}
                                src={'/galleryPhoto4.jpg'}
                                alt={'photo'}
                                className={s.photo}
                            />
                        </div>
                    </div>
                    <div className={s.bottomRightGrid}>
                        If you would like to learn web development and get a job in the tech industry, you are going to
                        LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video
                        tutorials! This course was designed to be extremely beginner friendly. We will begin with the
                        very basics of HTML and build a simple web page.
                    </div>
                </div>
            </main>
        </div>
    );
};
