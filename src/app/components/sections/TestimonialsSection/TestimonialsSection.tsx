'use client';

import React, {useEffect, useState} from 'react';
import styles from './TestimonialsSection.module.scss';
import TestimonialCard from '../../TestimonialCard/TestimonialCard';

function TestimonialsSection() {
    const [currIdx, setCurrIdx] = useState<number>(0);
    const testimonialArray = [
        {
            'profile': 'https://www.onelot.ph/_next/image?url=%2FAvatar_1.png&w=256&q=75',
            'quote': 'The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.',
            'author': 'Mark Vergel de Dios',
            'position': 'Owner',
            'organization': 'MVD Auto Works'
        },
        {
            'profile': 'https://www.onelot.ph/_next/image?url=%2FAvatar_2.png&w=256&q=75',
            'quote': 'The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.',
            'author': 'Mark Vergel de Dios',
            'position': 'Software Developer',
            'organization': 'MVD Auto Works'
        },
        {
            'profile': 'https://www.onelot.ph/_next/image?url=%2FAvatar_1.png&w=256&q=75',
            'quote': 'The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.',
            'author': 'Mark Vergel de Dios',
            'position': 'SDE III',
            'organization': 'MVD Auto Works'
        },
    ];
    useEffect(() => 
    {
        const testimonialInterval = setInterval(() => 
        {
            handleRightNavClick(currIdx);
        }, 2000)

        return () => clearInterval(testimonialInterval);

    })
    const handleLeftNavClick = () => 
    {
        if (currIdx == 0)
        {
            setCurrIdx(testimonialArray.length - 1);
        }
        else setCurrIdx(currIdx - 1);
    }
    const handleRightNavClick = (currIdx: number) => 
    {
        setCurrIdx((currIdx + 1) % testimonialArray.length);
    }
    return (
        <div className={styles.testimonialsSection}>
            <h2 className={styles.section_heading}>
                Testimonials
            </h2>
            <div className={styles.testimonialsGrid}>
                <TestimonialCard 
                    profile={testimonialArray[currIdx].profile}
                    quote={testimonialArray[currIdx].quote}
                    author={testimonialArray[currIdx].author}
                    position={testimonialArray[currIdx].position}
                    organization={testimonialArray[currIdx].organization}
                />
            </div>
            <div className={styles.carouselNavigationIcons}>
                <svg onClick={() => handleLeftNavClick()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#6b7280' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>

                <svg onClick={() => handleRightNavClick(currIdx)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6d7482" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
        </div>
    )
}

export default TestimonialsSection;
