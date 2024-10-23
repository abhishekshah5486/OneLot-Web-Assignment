import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.headerSection}>
            <Image 
            src="https://www.onelot.ph/_next/image?url=%2Flogo.png&w=256&q=75"
            alt='onelot-logo'
            width={100}
            height={35}
            />
            
            <ul className={styles.navLinks}>
                <li><Link href="https://www.onelot.ph/">Home</Link></li>
                <li><Link href="https://www.onelot.ph/products/dealer-inventory-loans">Products</Link></li>
                <li><Link href="https://www.onelot.ph/about">About</Link></li>
                <li><Link href="https://www.onelot.ph/contact">Contact</Link></li>
            </ul>

            <div className={styles.authButtons}>
                <button type='button' className={styles.loginBtn}>Login</button>
                <button type='button' className={styles.getStartedBtn}>Get Started</button>
            </div>
        </div>
    )
}
