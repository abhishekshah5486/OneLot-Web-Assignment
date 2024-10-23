import React from 'react';
import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps
{
    profile: string;
    quote: string;
    author: string;
    position?: string;
    organization: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({profile, quote, author, position, organization}) => {
    return (
        <div className={styles.testimonialsCardContainer}>
            <div className={styles.cardProfile}>
                <Image 
                src={profile}
                height={100}
                width={100}
                className={styles.cardProfile}
                alt='profile'
                />
            </div>
            <h3 className={styles.testimonialQuote}>
                {`"${quote}"`}
            </h3>
            <div className={styles.testimonialCardAuthorDetails}>
                <h3 className={styles.testimonialCardAuthor}>{author}</h3>

                <p className={styles.testimonialPositionOrganization}>
                {position ? `${position}, ${organization}` : organization}
                </p>
            </div>
            <div className={styles.carouselNavigationIcons}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#6b7280' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6d7482" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
        </div>
    )
}

export default TestimonialCard;
