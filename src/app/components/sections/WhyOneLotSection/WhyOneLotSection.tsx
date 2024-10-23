import React from 'react';
import Image from 'next/image';
import Card from '../../WhyOneLotCard/WhyOneLotCard';
import styles from './WhyOneLotSection.module.scss';

function WhyOneLotSection() {
    return (
        <div className={styles.whyOneLotSection}>
            <h1 className={styles.section_heading}>
                Why OneLot?
            </h1>
            <div className={styles.cardContainer}>
                <Card 
                title='Trust'
                description='Regulated by Securities and Exchange Commission (SEC) Philippines'
                icon={
                    <Image 
                    src="https://www.onelot.ph/trust.svg"
                    height={64}
                    width={64}
                    alt='trust-icon'
                    />
                }
                />
            </div>
            <div className={styles.cardContainer}>
                <Card 
                title='High Amount'
                description='Get the highest loan amounts compared to other banks and lenders'
                icon={
                    <Image 
                    src="https://www.onelot.ph/trust.svg"
                    height={64}
                    width={64}
                    alt='trust-icon'
                    />
                }
                />
            </div>
            <div className={styles.cardContainer}>
                <Card 
                title='Fast'
                description='Get the money within a few hours on the same day'
                icon={
                    <Image 
                    src="https://www.onelot.ph/trust.svg"
                    height={64}
                    width={64}
                    alt='trust-icon'
                    />
                }
                />
            </div>
        </div>
    )
}

export default WhyOneLotSection;
