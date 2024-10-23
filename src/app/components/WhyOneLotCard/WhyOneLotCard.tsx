import React from 'react';
import styles from './WhyOneLotCard.module.scss';

interface CardProps{
    title: string;
    description: string;
    icon: React.ReactNode; 
}
const WhyOneLotCard: React.FC<CardProps> = ({title, description, icon}) => {
    return (
        <div className={styles.oneLotCardContainer}>
            <div className={styles.cardIcon}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    )
}

export default WhyOneLotCard;
