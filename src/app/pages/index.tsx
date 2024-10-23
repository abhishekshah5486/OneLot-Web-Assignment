import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/sections/HeroSection';
import BusinessGrowthSection from '../components/sections/BusinessGrowthSection';
import CarFinancingSection from '../components/sections/CarFinancingSection';
import DealershipManagementSection from '../components/sections/DealershipManagementSection';
import WhyOneLotSection from '../components/sections/WhyOneLotSection';

function index() {
    return (
        <div>
            <Header />
            <HeroSection />
            <BusinessGrowthSection />
            <CarFinancingSection />
            <DealershipManagementSection />
            <WhyOneLotSection />
        </div>
    )
}

export default index
