import { useState, useEffect } from 'react';
import { PropertyCard } from './PropertyCard';

export const FeaturedPropertiesSection = ({ properties }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [isClient, setIsClient] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setIsClient(true);
        const filtered = activeTab === 'all'
            ? properties
            : properties.filter(property => property.type === activeTab.toLowerCase());
        setFilteredProperties(filtered);
    }, [activeTab, properties]);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? filteredProperties.length - 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === filteredProperties.length - 2 ? 0 : prevSlide + 1));
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center mb-6 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Our Featured Exclusives
                    </h1>

                    <div className="hidden md:flex gap-2">
                        <button
                            className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                            onClick={() => setActiveTab('all')}
                        >
                            <span className={`${activeTab === 'all' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}>
                                All
                            </span>
                        </button>
                        <button
                            className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                            onClick={() => setActiveTab('rent')}
                        >
                            <span className={`${activeTab === 'rent' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}>
                                For Rent
                            </span>
                        </button>
                        <button
                            className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                            onClick={() => setActiveTab('sale')}
                        >
                            <span className={`${activeTab === 'sale' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}>
                                For Sale
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile tabs */}
                <div className="flex md:hidden items-center space-x-3 mb-6 overflow-x-auto pb-2">
                    <button
                        className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All
                    </button>
                    <button
                        className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${activeTab === 'rent' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                        onClick={() => setActiveTab('rent')}
                    >
                        For Rent
                    </button>
                    <button
                        className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${activeTab === 'sale' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                        onClick={() => setActiveTab('sale')}
                    >
                        For Sale
                    </button>
                </div>

                {isClient && (
                    <div className="relative">
                        {/* Navigation buttons - desktop */}
                        <button
                            className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-50 transition-colors items-center justify-center"
                            aria-label="Previous properties"
                            onClick={handlePrevSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        {/* Desktop view: Grid layout */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredProperties.map(property => (
                                <div key={property.id} className="w-[355px] h-[440px]">
                                    <PropertyCard property={property} />
                                </div>
                            ))}
                        </div>

                        {/* Mobile view: Carousel with first card visible */}
                        <div className="md:hidden">
                            {/* First card always visible */}
                            {filteredProperties.length > 0 && (
                                <div className="mb-4 w-[355px] h-[440px] mx-auto">
                                    <PropertyCard property={filteredProperties[0]} />
                                </div>
                            )}

                            {/* Carousel for remaining cards */}
                            <div className="relative">
                                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4">
                                    {filteredProperties.slice(1).map(property => (
                                        <div key={property.id} className="flex-shrink-0 w-[355px] h-[440px] snap-center">
                                            <PropertyCard property={property} />
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile carousel indicators */}
                                <div className="flex justify-center mt-3 space-x-2">
                                    {filteredProperties.slice(1).map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                                            onClick={() => setCurrentSlide(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation buttons - desktop */}
                        <button
                            className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-50 transition-colors items-center justify-center"
                            aria-label="Next properties"
                            onClick={handleNextSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        {/* Mobile swipe indicators */}
                        <div className="flex md:hidden justify-center mt-3">
                            <div className="text-xs text-gray-500">Swipe for more</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};