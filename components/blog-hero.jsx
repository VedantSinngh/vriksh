import Image from "next/image";

export function BlogHero() {
    return (
        <section className="relative w-full h-[300px] bg-gray-200 overflow-hidden">
            {/* Image Background */}
            <div className="absolute inset-0">
                <Image
                    src="/contact.png" // path relative to the public folder
                    alt="Blog background"
                    layout="fill" // or simply use the `fill` prop in Next.js 13+
                    objectFit="cover"
                    className="filter brightness-80"
                />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
            </div>
        </section>
    );
}
