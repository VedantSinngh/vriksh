import Image from "next/image";

export function ImageGallery({ property }) {
    return (
        <div className="w-full">
            <div className="w-full h-[573px] mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                    <div className="md:col-span-2 h-full">
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image src={property.image} alt={property.title} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="relative w-full h-[50%] rounded-lg overflow-hidden">
                            <Image src="/about1.png" alt="Living room" fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[50%] rounded-lg overflow-hidden">
                            <Image src="/about2.png" alt="Interior design" fill className="object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <span className="text-white text-2xl font-bold">10+ Photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
