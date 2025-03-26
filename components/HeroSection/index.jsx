'use client';
import { HeroBanner } from './HeroBanner';
import { SearchPanel } from './SearchPanel';
import { FeaturedPropertiesSection } from './FeaturedPropertiesSection';
import { TestimonialSection } from './TestimonialSection';
import { FeaturedProperties } from '../feature-propertise';
import { ContactForm } from '../contact-form';

export const HeroSection = () => {
    const trendingArticles = [
        {
            id: 1,
            image: "/t1.png",
            title: "As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
            link: "/blog/first-time-buyers-guide"
        },
        {
            id: 2,
            image: "/t2.png",
            title: "Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
            link: "/blog/market-insights"
        },
        {
            id: 3,
            image: "/t3.png",
            title: "Here's How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
            link: "/blog/buyer-strategies"
        }
    ];

    const properties = [
        {
            id: 1,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'sale'
        },
        {
            id: 2,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'rent'
        },
        {
            id: 3,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'sale'
        },
    ];

    return (
        <section className="relative">
            <HeroBanner />
            <SearchPanel />
            <FeaturedProperties />
            <FeaturedPropertiesSection properties={properties} />
            <TestimonialSection trendingArticles={trendingArticles} />
            <ContactForm />
        </section>
    );
};