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
        </div>
    )
}

export default TestimonialCard;
