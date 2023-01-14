import React from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import {menuItems} from "./consts/menu";

export const Header = () => {
    return (
        <header className={s.Header}>
            <div className={s.logo}>
                <Image
                    width={'168'}
                    height={'33'}
                    src={'/logo.svg'}
                    alt={'logo'}
                />
            </div>
            <nav className={s.navMenu}>
                {menuItems.map(item => (
                    <a
                        className={s.menuLink}
                        href={item.href}
                    >
                        {item.text}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
