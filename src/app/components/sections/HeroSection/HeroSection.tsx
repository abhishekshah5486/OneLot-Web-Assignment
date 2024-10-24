import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSectionContent}>
                <h1 className={styles.heroSectionTitle}>
                    Grow your dealership with working capital loans and digital tools from OneLot
                </h1>
                <p className={styles.heroSectionDescription}>
                We enable dealers to buy more cars through our inventory loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights
                </p>
                <button type='button' className={styles.heroSection_cta}>
                    Get Started
                </button>
                <Image
                src="https://www.onelot.ph/_next/image?url=%2Fhero.png&w=3840&q=75"
                alt='hero-section-banner'
                width={1200}
                height={500}
                className={styles.heroSection_banner} 
                />
            </div>
            <div className={styles.regulatedBySection}>
                <p>Regulated by</p>
                <Image 
                src="https://www.onelot.ph/sec.svg"
                height={110}
                width={180}
                alt='regulated by securities and exchange commission'
                />
            </div>
        </div>
    )
}

export default HeroSection;
