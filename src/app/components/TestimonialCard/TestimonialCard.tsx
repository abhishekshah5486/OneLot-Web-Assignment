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
        <div>
        
        </div>
    )
}

export default TestimonialCard;
