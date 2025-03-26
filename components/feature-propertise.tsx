import Image from "next/image"
import Link from "next/link"

/**
 * FeaturedProperties component displays a section with company description and property images
 *
 * @returns A React component showcasing featured properties with descriptive text
 */
export function FeaturedProperties() {
    return (
        <section className="mt-10 pt-12 pb-24 px-4 bg-transparent"> {/* 40px margin from top */}
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Section - Text Content */}
                    <div className="md:w-2/5 w-full flex flex-col justify-center h-full px-10">
                        <h2 className="text-[48px] font-semibold mb-6 text-gray-900 leading-tight font-[Source Sans Pro] w-[530px]">
                            Your Trusted Gateway to Ahmedabad's Finest Homes
                        </h2>
                        <p className="text-[20px] font-normal text-gray-700 mb-8 leading-relaxed font-[Source Sans Pro] w-[530px]">
                            Mindsestate is a dedicated real estate consultancy focused on bringing Ahmedabad's most promising under-construction residential projects to discerning homebuyers. We simplify the home-buying process with expert market insights, personalized assistance, and a commitment to transparency.
                        </p>
                        <button className="border-2 border-blue-600 text-blue-600 font-medium rounded-full px-5 py-3 inline-flex items-center text-sm hover:bg-blue-50 transition-all duration-300 shadow-sm">
                            Read More <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Right Section - Image Grid */}
                    <div className="md:w-1/2 flex items-center justify-center px-10">
                        <div className="relative w-full h-[600px]">
                            {/* Top left image - Large */}
                            <div className="absolute top-0 left-0 w-[49%] h-[58%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Residential building"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Top right image - Small */}
                            <div className="absolute top-0 right-0 w-[49%] h-[45%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Modern apartment complex"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom left image - Small */}
                            <div className="absolute bottom-0 left-0 w-[49%] h-[40%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Luxury residential complex"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom right image - Large */}
                            <div className="absolute bottom-0 right-0 w-[49%] h-[53%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="High-rise apartment building"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}