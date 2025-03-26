import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function PropertyHeader({ property }) {
    return (
        <div>
            {/* Badge for Property Type */}
            <Badge className="bg-[#0196ff]/10 text-[#0196ff] hover:bg-[#0196ff]/20 rounded-sm">
                {property.type.split(" ")[1]?.toUpperCase()}
            </Badge>

            {/* Property Details */}
            <div className="flex flex-wrap justify-between items-start ">
                <div className="flex flex-col gap-1">
                    {/* Title with Sen Font */}
                    <h1 className="text-2xl font-sen font-bold text-black leading-tight">{property.title}</h1>

                    {/* Location with Burlow Font and Color #6D7175 */}
                    <div className="flex items-center text-[#6D7175] font-burlow">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{property.location}</span>
                    </div>

                    {/* Recommendation Text with Burlow Font and Color #6D7175 */}
                    <div className="text-sm text-[#6D7175] font-burlow">
                        (100 People Recommended)
                    </div>
                </div>

                {/* Pricing and Image */}
                <div className="text-center space-y-2">
                    {/* Price */}
                    <div className="text-3xl font-bold text-[#0196ff]">
                        {property.price}
                    </div>

                    {/* Price Type */}
                    <div className="text-gray-500 text-lg">
                        {property.priceType ? `(${property.priceType})` : "(Price Only)"}
                    </div>

                    {/* Availability Image */}
                    {property.agent && (
                        <div className="flex justify-center">
                            <Image
                                src={property.agent} // Dynamically using agent image
                                alt="Available"
                                width={120}
                                height={40}
                                className="rounded-md"
                                priority // Ensures image loads faster
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
