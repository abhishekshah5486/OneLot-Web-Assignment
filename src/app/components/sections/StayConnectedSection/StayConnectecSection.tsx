import React from 'react';
import styles from './StayConnectecSection.module.scss';
import SocialAccountCard from '../../SocialAccountCard/SocialAccountCard';
import instaIcon from '../../../../assets/icons/insta-icon.svg';
import facebookIcon from '../../../../assets/icons/facebook-icon.svg';

function StayConnectecSection() {
    return (
        <div className={styles.stayConnectedSection}>
            <h3 className={styles.section_heading}>Stay Connected</h3>
            <p className={styles.stay_connected_description}>
                Follow OneLot on Facebook and Instagram to stay up to date with our latest offers, updates, and new product features.
            </p>
            <div className={styles.social_media_cards}>
                <SocialAccountCard 
                    platform="Facebook" 
                    link="https://www.facebook.com/OneLotPH" 
                    icon={instaIcon}
                />
                <SocialAccountCard
                    platform="Instagram" 
                    link="https://www.instagram.com/onelot.ph/" 
                    icon={facebookIcon}
                />
            </div>
        </div>
    )
}

export default StayConnectecSection;
