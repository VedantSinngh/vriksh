import Image from "next/image"

export default function RealEstateHero() {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                        <Image
                            src="/about.png"
                            alt="Modern urban building with skyscrapers in the background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="w-full md:w-1/2 space-y-3">
                    <h2 className="text-2xl font-bold text-green-800 leading-tight">
                        Expert Guidance, Curated Homes, Zero Hassle
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Finding the perfect home shouldn't be overwhelming. At MindHabitat, we simplify the process with expert
                        guidance tailored to your needs. Our team specializes in high-potential construction projects ensuring you
                        invest in a home with real value and future growth potential. With seamless assistance throughout the entire
                        buying-selling-renting process, we make your home-buying journey smooth, informed, and rewarding.
                    </p>
                </div>
            </div>
        </div>
    )
}

