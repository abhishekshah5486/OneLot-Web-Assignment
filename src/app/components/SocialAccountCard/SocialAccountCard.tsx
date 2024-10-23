import React from 'react';
import styles from './SocialAccountCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface SocialAccountCardProps
{
    platform: string;
    link: string;
    icon: string;
}

const SocialAccountCard: React.FC<SocialAccountCardProps> = ({platform, link, icon}) => {
    return (
        <div className={styles.socialMediaCard}>
            <div className={styles.socialMediaIcon}>
                <Link href={link}>
                    <Image 
                    src={icon}
                    alt={`${platform} icon`}
                    width={50}
                    height={50}
                    />
                </Link>
            </div>
            <Link href={link}>
                <p className={styles.socialMediaLink}>Follow us on {platform}</p>
            </Link>
        </div>
    )
}

export default SocialAccountCard;
