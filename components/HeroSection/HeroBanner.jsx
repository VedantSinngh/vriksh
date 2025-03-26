import Image from "next/image";

export const HeroBanner = () => {
    return (
        <div className="relative h-[705px]">
            <div className="absolute inset-0">
                <Image
                    src="/home1.png"
                    alt="Modern interior with wooden slats"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-[80px] font-poppins font-extrabold mb-6 leading-tight max-w-4xl">
                    Find. Invest. Thrive.
                </h1>
                <p className="text-[25.5px] mb-8 max-w-2xl font-light font-poppins">
                    Find Your Perfect Home in Ahmedabad – Effortless, Reliable, and Made for You!
                </p>
            </div>
        </div>
    );
};
