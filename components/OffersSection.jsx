import Image from "next/image";

export function OffersSection() {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Image src="/pointer.png" alt="Offer" width={12} height={12} />
                <span className="font-medium text-black font-barlow">Special Price</span>
                <span className="text-black font-barlow">Get extra 15% off (price inclusive of discount)</span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/pointer.png" alt="Offer" width={12} height={12} />
                <span className="font-medium text-black font-barlow">Bank Offer</span>
                <span className="text-black font-barlow">10% instant discount on VISA Cards</span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/pointer.png" alt="Offer" width={12} height={12} />
                <span className="font-medium text-black font-barlow">No cost EMI $149/month</span>
                <span className="text-black font-barlow">Standard EMI also available</span>
            </div>
        </div>
    );
}
