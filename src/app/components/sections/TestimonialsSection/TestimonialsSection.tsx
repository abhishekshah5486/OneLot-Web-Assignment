import React from 'react';
import styles from './TestimonialsSection.module.scss';
import TestimonialCard from '../../TestimonialCard/TestimonialCard';

function TestimonialsSection() {
    return (
        <div className={styles.testimonialsSection}>
            <h2 className={styles.section_heading}>
                Testimonials
            </h2>
            <div className={styles.testimonialsGrid}>
                <TestimonialCard 
                profile='https://www.onelot.ph/_next/image?url=%2FAvatar_1.png&w=256&q=75'
                quote='The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.'
                author='Mark Vergel de Dios'
                position='Owner'
                organization='MVD Auto Works'
                />
            </div>
        </div>
    )
}

export default TestimonialsSection;
