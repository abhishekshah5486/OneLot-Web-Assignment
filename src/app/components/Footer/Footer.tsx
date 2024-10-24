import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '../../../assets/icons/facebook-icon.svg';
import instaIcon from '../../../assets/icons/insta-icon.svg';

function Footer() {
    return ( 
        <div className={styles.footer_section}>
            <div className={styles.footer__cta}>
                <h2 className={styles.footer__ctaTitle}>Get Started Today</h2>
                <p className={styles.footer__ctaDescription}>
                We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
                </p>
                <button type='button' className={styles.footer__ctaButton}>Inquire Now</button>
            </div>
            <div className={styles.footer_section_links}>
                <Image 
                src="https://www.onelot.ph/_next/image?url=%2Flogo.png&w=384&q=75"
                height={50}
                width={150}
                alt='OneLot Logo'
                />
                <div className={styles.footer_links}>
                    <ul className={styles.footer__nav_links}>
                        <li className={styles.footer__navItem}><Link href="https://www.onelot.ph/">Home</Link></li>
                        <li className={styles.footer__navItem}><Link href="https://www.onelot.ph/about">About</Link></li>
                        <li className={styles.footer__navItem}><Link href="https://www.onelot.ph/contact">Contact</Link></li>
                        <li className={styles.footer__navItem}><Link href="https://www.onelot.ph/faq">FAQs</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.footer__copyright_socialLinks}>
                <div className={styles.footer__copyright}>
                <p>© 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.</p>
                <p>© 2024 OneLot Financing Corporation. All Rights Reserved.</p>
                </div>
                <div className={styles.socialLinks}>
                    <Image 
                    src={instaIcon}
                    height={20}
                    width={20}
                    alt='facebook-icon'
                    />
                    <Image 
                    src={facebookIcon}
                    height={20}
                    width={20}
                    alt='linkedin-icon'
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;
