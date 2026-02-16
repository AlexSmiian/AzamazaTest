"use client"

import {useEffect, useState} from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from "next/link";
import BurgerMenu from "@/app/_components/Header/burgerMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';

        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={'/'} className={styles.logo}>
                   <Image src={'/images/logo.png'} alt={'logo'} width={48} height={48} loading="eager" />
                    <span className={styles.logoText}>Azamaza</span>
                </Link>
                <button className={styles.memberButton}>
                    Become a member
                </button>

                <div className={styles.rightSection}>
                    <div className={styles.userAvatar}>
                        <Image src={'/images/user.png'} alt={'user'} width={48} height={48} loading="eager" />
                    </div>
                    <button
                        className={styles.menuButton}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <Image src={'/images/menu.png'} alt={'user'} width={24} height={24} loading="eager" />
                    </button>
                </div>
            </div>
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} closeMenu={closeMenu} />
        </header>
    );
}