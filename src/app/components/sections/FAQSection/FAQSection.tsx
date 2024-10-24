'use client';
import React, { act } from 'react';
import { useState } from 'react';
import styles from './FAQSection.module.scss';
import Image from 'next/image';
import faqIcon from '../../../../assets/icons/faq-icon.svg';
import toggleUpIcon from '../../../../assets/icons/toggle-up-icon.svg';
import toggleDownIcon from '../../../../assets/icons/toggle-down-icon.svg';

function FAQSection() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const toggleFAQ = (index: number) => 
    {
        setActiveIdx((activeIdx === index) ? null : index);
    }
    const faqs = [
        {
            question: "What is OneLot?",
            answer: "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions."
        },
        {
            question: "How do I apply for a loan?",
            answer: "OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan."
        },
        {
            question: "What are the interest rates offered?",
            answer: ""
        },
        {
            question: "What kind of vehicles can I upload?",
            answer: ""
        },
        {
            question: "How can I keep track of potential buyers.",
            answer: ""
        }
    ]
    return (
        <div className={styles.faqSection}>
            <div className={styles.section_heading}>
                Frequently asked questions
            </div>
            <div className={styles.faq_container}>
                {
                    faqs.map((faq, idx) => 
                    {
                        return (
                            <div key={idx}>
                                <div 
                                className={styles.faq_item}
                                onClick={() => toggleFAQ(idx)}
                                >
                                    <div className={styles.faqQuestion}
                                    >   
                                        <Image 
                                        src={faqIcon}
                                        height={16}
                                        width={16}
                                        alt='faq-icon'
                                        />
                                        <h3 className={styles.question}>{faq.question}</h3>
                                    </div>
                                    <span className={styles.toggleIcon}>
                                        {
                                            (activeIdx !== idx) ?
                                            (
                                                <Image 
                                                src={toggleDownIcon}
                                                height={24}
                                                width={24}
                                                alt='toggle-down-icon'
                                                />
                                            ) :
                                            (
                                                <Image 
                                                src={toggleUpIcon}
                                                height={24}
                                                width={24}
                                                alt='toggle-up-icon'
                                                /> 
                                            )
                                        }
                                    </span>
                                </div>
                                {
                                    (activeIdx === idx) && (
                                        <div className={styles.faqAnswer}>
                                        {faq.answer}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button type='button' className={styles.see_allBtn}>See all 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={12} width={15} fontWeight={400}><path fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </button>
            </div>
        </div>
    )
}

export default FAQSection;
