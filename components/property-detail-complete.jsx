import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ImageGallery } from "./ImageGallery";
import { PropertyHeader } from "./PropertyHeader";
import { OffersSection } from "./OffersSection";
import { PropertySpecs } from "./PropertySpecs";
import { DescriptionSection } from "./DescriptionSection";
import { HighlightsSection } from "./HighlightsSection";
import { MoreInfoSection } from "./MoreInfoSection";
import { PropertySummary } from "./PropertySummary";
import { FloorPlans } from "./FloorPlans";
import { NearbyPlaces } from "./NearbyPlaces";
import { AgentInfo } from "./AgentInfo";
import { SearchProperty } from "./SearchProperty";
import Image from "next/image";

export function PropertyDetailComplete({ property }) {
    return (
        <div className="flex flex-col text-black  mx-auto p-6">
            <ImageGallery property={property} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    <PropertyHeader property={property} />
                    <OffersSection />
                    <div className="flex items-center gap-4">
                        <Button className="bg-transparent flex items-center gap-1 px-4">
                            <Image src="/download.png" alt="Download" width={40} height={40} />
                            <Image src="/download1.png" alt="Download" width={176} height={40} />
                        </Button>
                    </div>

                    <PropertySpecs property={property} />
                    <DescriptionSection property={property} />
                    <HighlightsSection />
                    <MoreInfoSection property={property} />
                    <PropertySummary property={property} />
                    <FloorPlans property={property} />
                    <NearbyPlaces />
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    <AgentInfo />
                    <SearchProperty />
                </div>
            </div>
        </div>
    );
}