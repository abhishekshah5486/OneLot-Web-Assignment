'use client';

import React, {useEffect, useState} from 'react';
import styles from './AndroidHeader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerIcon from '../../../assets/icons/hamburger-icon.svg';

export default function AndroidHeader() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const handleScroll = () => 
        {
            if (window.scrollY > 0) setIsScrolled(true);
            else setIsScrolled(false);
        }

    useEffect(() => 
    {
        window.addEventListener('scroll', handleScroll);
        return () => 
        {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <div className={`${styles.headerSection} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoContainer}>
            <Image 
            src="https://www.onelot.ph/_next/image?url=%2Flogo.png&w=256&q=75"
            alt='onelot-logo'
            width={100}
            height={35}
            className={styles.OneLotLogo}
            />
            
            <div className={styles.ViewMoreButton}>
            <Image 
            src={HamburgerIcon}
            alt='hamburger-icon'
            height={24}
            width={24}
            className={styles.hamburgerIcon}
            />
            </div>
            </div>
            <div className={styles.navbar_section}>
                <div className={styles.navLinks}>
                    <ul>
                        <li><Link href="https://www.onelot.ph/">Home</Link></li>
                        <li><Link href="https://www.onelot.ph/products/dealer-inventory-loans">Products</Link></li>
                    </ul>
                    <div className={styles.linebreak}></div>
                    <ul>
                        <li><Link href="https://www.onelot.ph/about">About</Link></li>
                        <li><Link href="https://www.onelot.ph/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.linebreak}></div>
                <div className={styles.authButtons}>
                    <button 
                    type='button'
                    className={styles.inquireNowBtn}>
                        Inquire Now
                    </button>
                    <button type='button'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}
