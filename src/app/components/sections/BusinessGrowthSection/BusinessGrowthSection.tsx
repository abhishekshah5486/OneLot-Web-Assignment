import React from 'react';
import styles from './BusinessGrowthSection.module.scss';
import Image from 'next/image';
import arrowRightIcon from '../../../../assets/icons/arrow-right.svg';
import dealerLoanIcon from '../../../../assets/icons/dealer-loans-icon.svg';
import dmsicon from '../../../../assets/images/dmsicon.webp';

function BusinessGrowthSection() {
    return (
        <div className={styles.businessGrowthSection}>
            <div className={styles.businessGrowthLeftSection}>
                <h2>Everything You Need to Grow Your Business</h2>
                <p>OneLot is your trusted lending and financing partner, exclusively tailored for used car dealerships. We also offer digital tools for streamlined operations and growth of your dealership.</p>
                <a href="" className={styles.learn_moreBtn}>Learn more <Image 
                src={arrowRightIcon}
                height={16}
                width={12}
                alt='learn-more-btn'
                /></a>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.serviceSections}>
                <div className={styles.loan_section}>
                    <Image 
                    src={dealerLoanIcon}
                    alt='dealer-loans-icon'
                    height={25}
                    width={25}
                    />
                    <div className={styles.dealerLoansContent}>
                        <h3>Dealer Loans</h3>
                        <p className={styles.serviceDescription}>Accelerate your growth with tailored loan solutions.</p>
                        <p className={styles.serviceDetails}>Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.</p>
                    </div>
                </div>
                <div className={styles.management_system_section}>
                    <Image 
                    src={dmsicon}
                    alt='dealership-management-system-icon'
                    height={30}
                    width={30}
                    />
                    <div className={styles.dmsContent}>
                        <h3>Dealership Management System</h3>
                        <p className={styles.serviceDescription}>Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.</p>
                        <p className={styles.serviceDetails}>OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessGrowthSection;
