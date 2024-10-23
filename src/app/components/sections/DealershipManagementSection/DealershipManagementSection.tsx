import React from 'react';
import styles from './DealershipManagementSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import BenefitsListCheckIcon from '../../../../assets/icons/benefits-list-check-icon.svg';

function DealershipManagementSection() {
    return (
        <div className={styles.dealershipManagementSection}>
            <div className={styles.dealershipManagementContainer}>
                <div className={styles.textSection}>
                    <h2 className={styles.heading}>Dealership Management System</h2>
                    <p className={styles.description}>
                    OneLot's digital platform is built with a single goal: to help used car dealers operate their business more efficiently.
                    </p>
                    <p className={styles.linebreak}></p>
                    <ul className={styles.benefitsList}>
                        <li className={styles.benefitsListItem}>
                            <Image 
                            src={BenefitsListCheckIcon}
                            height={15}
                            width={15}
                            alt='benefits-list-check-icon'
                            />
                            <p><span className='font-bold'>Inventory Management:</span> Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.</p>
                        </li>
                        <li className={styles.benefitsListItem}>
                            <Image 
                            src={BenefitsListCheckIcon}
                            height={15}
                            width={15}
                            alt='benefits-list-check-icon'
                            />
                            <p><span className='font-bold'>Marketing Tools:</span> Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click.</p>
                        </li>
                        <li className={styles.benefitsListItem}>
                            <Image 
                            src={BenefitsListCheckIcon}
                            height={15}
                            width={15}
                            alt='benefits-list-check-icon'
                            />
                            <p><span className='font-bold'>Marketing Insights (Coming Soon):</span> Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.</p>
                        </li>
                    </ul>
                    <div className={styles.linebreak}></div>
                    <p className={styles.callToAction}>
                    Sign up for OneLot's dealer platform today, and make managing your cars easier.
                    </p>
                    <Link href="/loans">
                    <button className={styles.exploreNowButton}>Explore Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={15} width={15} fontWeight={400}><path 
                    fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                    </Link>
                </div>
            </div>
            <div className={styles.imageWrapper}>
            <Image 
            src="https://www.onelot.ph/dealership-management-system-pic.svg"
            alt='car-financing-banner'
            height={400}
            width={800}
            />
            </div>

        </div>
    )
}

export default DealershipManagementSection;
