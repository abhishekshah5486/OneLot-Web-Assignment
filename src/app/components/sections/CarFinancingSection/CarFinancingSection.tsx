import React from 'react';
import styles from './CarFinancingSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import BenefitsListCheckIcon from '../../../../assets/icons/benefits-list-check-icon.svg';
import arrowRight from '../../../../assets/icons/arrow-right.svg';

function CarFinancingSection() {
    return (
        <div className={styles.carFinancingSection}>
            <div className={styles.imageWrapper}>
            <Image 
            src="https://www.onelot.ph/_next/image?url=%2Fcar-financing-pic.png&w=1920&q=75"
            alt='car-financing-banner'
            height={500}
            width={900}
            />
            </div>

            <div className={styles.carFinancingContainer}>
                <div className={styles.textSection}>
                    <h2 className={styles.heading}>Car Financing</h2>
                    <h3 className={styles.subheading}>Dealer Loans</h3>
                    <p className={styles.description}>
                    OneLot's working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
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
                            <p>Interest as low as 1.5% per month with daily calculation of interest</p>
                        </li>
                        <li className={styles.benefitsListItem}>
                            <Image 
                            src={BenefitsListCheckIcon}
                            height={15}
                            width={15}
                            alt='benefits-list-check-icon'
                            />
                            <p>Financing up to 70% of the vehicle purchase</p>
                        </li>
                        <li className={styles.benefitsListItem}>
                            <Image 
                            src={BenefitsListCheckIcon}
                            height={15}
                            width={15}
                            alt='benefits-list-check-icon'
                            />
                            <p>Financing period up to 90 days with a flexible repayment schedule at any point</p>
                        </li>
                    </ul>
                    <div className={styles.linebreak}></div>
                    <p className={styles.callToAction}>
                    Use OneLot's financing solution today, grow the number of cars in your lot, and increase your profits.
                    </p>
                    <Link href="/loans">
                    <button className={styles.viewLoansButton}>View Loans
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={15} width={15} fontWeight={400}><path 
                    fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarFinancingSection;
