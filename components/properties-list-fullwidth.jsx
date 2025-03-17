import Link from "next/link";
import Image from "next/image";
import { Heart, Share2, MapPin, Bed, Bath, Square, ChevronDown, Grid, List } from "lucide-react";

// Sample property data
const properties = [
    {
        id: 1,
        title: "Traditional Food Restaurant",
        location: "Sunset Drive, Miami, FL, USA",
        price: "$2,600",
        priceType: "Monthly",
        type: "For Rent",
        featured: false,
        hot: false,
        image: "/product1.png",
        sqft: "950 Sq Ft",
        beds: null,
        baths: null,
        addedDate: "June 12, 2022",
        buildYear: null,
    },
    {
        id: 2,
        title: "Villa on Grand Avenue",
        location: "CocoWalk, 3015 Grand Avenue, Miami, USA",
        price: "$4,750",
        priceType: "Monthly",
        type: "For Rent",
        featured: true,
        hot: false,
        image: "/product2.png",
        sqft: "9350 sq ft",
        beds: 4,
        baths: 4,
        addedDate: "June 11, 2022",
        buildYear: "2018",
    },
    {
        id: 3,
        title: "Office Space at Northwest 107th",
        location: "Northwest 107th Avenue, Doral, FL 33178, USA",
        price: "$3,100",
        priceType: "Monthly",
        type: "For Rent",
        featured: false,
        hot: false,
        image: "/product3.png",
        sqft: "2800 sq ft",
        beds: null,
        baths: null,
        addedDate: "June 10, 2022",
        buildYear: "2019",
    },
    {
        id: 4,
        title: "Home in Merrick Way",
        location: "Merrick Way, Miami, FL 33134, USA",
        price: "$540,000",
        priceType: "",
        type: "For Sale",
        featured: true,
        hot: true,
        image: "/product4.png",
        sqft: "4300 sq ft",
        beds: 3,
        baths: 3,
        addedDate: "June 15, 2022",
        buildYear: "2018",
    },
    {
        id: 5,
        title: "Villa in Coral Gables",
        location: "Deering Bay Drive, Coral Gables, FL 33156, USA",
        price: "$825,000",
        priceType: "",
        type: "For Sale",
        featured: true,
        hot: false,
        image: "/product5.png",
        sqft: "3500 sq ft",
        beds: 3,
        baths: 3.5,
        addedDate: "June 14, 2022",
        buildYear: "2019",
    },
    {
        id: 6,
        title: "Villa on Hollywood Boulevard",
        location: "Hatteras Lane, Hollywood, FL 33019, USA",
        price: "$740,000",
        priceType: "",
        type: "For Sale",
        featured: true,
        hot: false,
        image: "/product.png",
        sqft: "4530 sq ft",
        beds: 3,
        baths: 4,
        addedDate: "June 13, 2022",
        buildYear: "2018",
    },
];

export default function PropertiesListFullwidth() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-2">
                <Link href="/" className="text-[#333333] hover:underline">
                    Home
                </Link>
                <span className="mx-2 text-[#808080]"></span>
                <span className="text-[#0196ff]">Properties List Fullwidth</span>
            </div>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-[#1d1d1f] mb-6">Properties List Fullwidth</h1>

            {/* Filter Bar */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-[#666666]">1 to 6 out of 10 properties</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-[#666666]">Sort By:</span>
                        <button className="flex items-center text-sm text-[#333333] font-medium">
                            Date New to Old <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-[#0196ff] p-1.5 rounded">
                            <Grid className="h-4 w-4 text-white" />
                        </button>
                        <button className="p-1.5 rounded">
                            <List className="h-4 w-4 text-[#666666]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Property Listings */}
            <div className="grid grid-cols-1 gap-6">
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        image={property.image}
                        title={property.title}
                        location={property.location}
                        beds={property.beds}
                        baths={property.baths}
                        area={property.sqft}
                        price={property.price}
                        priceType={property.priceType}
                        buildYear={property.buildYear}
                        tags={[
                            property.type,
                            ...(property.featured ? ["Featured"] : []),
                            ...(property.hot ? ["Hot"] : []),
                        ]}
                        date={property.addedDate}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0196ff] text-white text-sm">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#666666] text-sm hover:bg-gray-100">
                        2
                    </button>
                </div>
            </div>
        </div>
    );
}

function PropertyCard({
    image,
    title,
    location,
    beds,
    baths,
    area,
    price,
    priceType,
    buildYear,
    tags,
    date,
}) {
    return (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden bg-white">
            {/* Property Image */}
            <div className="relative md:w-72 h-60">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-1">
                    <button className="w-8 h-8 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                        <Share2 className="h-4 w-4 text-white" />
                    </button>
                </div>
            </div>

            {/* Property Details */}
            <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        {/* Tags */}
                        <div className="flex gap-2 mb-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`text-xs px-2 py-1 rounded-full ${
                                        tag === "For Rent"
                                            ? "bg-[#0196ff] text-white"
                                            : tag === "For Sale"
                                            ? "bg-[#0196ff] text-white"
                                            : tag === "Featured"
                                            ? "bg-[#5a01ff] text-white"
                                            : tag === "Hot"
                                            ? "bg-[#dd3333] text-white"
                                            : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold text-[#1d1d1f] mb-1">{title}</h2>

                        {/* Location */}
                        <div className="flex items-center text-sm text-[#666666] mb-3">
                            <MapPin className="h-4 w-4 text-[#0196ff] mr-1" />
                            <span>{location}</span>
                        </div>
                    </div>

                    {/* Price and Build Year */}
                    <div className="text-right">
                        {buildYear && <div className="text-xs text-[#666666] mb-1">Build {buildYear}</div>}
                        <div className="font-bold text-lg text-[#1d1d1f]">{price}</div>
                        {priceType && <div className="text-xs text-[#666666]">{priceType}</div>}
                    </div>
                </div>

                {/* Property Features */}
                <div className="flex items-center gap-4 mb-3">
                    {beds && (
                        <div className="flex items-center text-sm text-[#666666]">
                            <Bed className="h-4 w-4 text-[#0196ff] mr-1" />
                            <span>{beds}</span>
                        </div>
                    )}
                    {baths && (
                        <div className="flex items-center text-sm text-[#666666]">
                            <Bath className="h-4 w-4 text-[#0196ff] mr-1" />
                            <span>{baths}</span>
                        </div>
                    )}
                    <div className="flex items-center text-sm text-[#666666]">
                        <Square className="h-4 w-4 text-[#0196ff] mr-1" />
                        <span>{area}</span>
                    </div>
                </div>

                {/* Added Date */}
                <div className="text-xs text-[#666666] mb-3">Added: {date}</div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                    <button className="px-4 py-2 bg-[#00aa5b] text-white rounded text-sm font-medium">
                        WhatsApp Us
                    </button>
                    <button className="px-4 py-2 bg-[#0196ff] text-white rounded text-sm font-medium">
                        Get a Call
                    </button>
                </div>
            </div>
        </div>
    );
}