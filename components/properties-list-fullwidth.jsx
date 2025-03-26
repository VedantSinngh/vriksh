import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Camera, Video } from "lucide-react";
import { useMemo } from "react";

export const properties = [
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
        agent: "/available.png", // Agent Status or Image
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
        agent: "/available.png",
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
        agent: "/available.png",
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
        agent: "/available.png",
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
        agent: "/available.png",
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
        Trendy: true,
        image: "/product.png",
        sqft: "4530 sq ft",
        beds: 3,
        baths: 4,
        addedDate: "June 13, 2022",
        buildYear: "2018",
        agent: "/available.png",
    }
];


function Tags({ tags }) {
    const tagImages = {
        "For Rent": "/rent.png",
        "For Sale": "/sale.png",
        "Featured": "/featured.png",
        "Hot": "/hot.png",
        "Trendy": "/trendy.png"
    };

    return (
        <div className="flex gap-2 mb-2 flex-wrap">
            {tags.map((tag, index) => (
                tagImages[tag] ? (
                    <Image
                        key={index}
                        src={tagImages[tag]}
                        alt={tag}
                        width={tag === "Hot" ? 35 : 60} // Smaller width for Hot
                        height={tag === "Hot" ? 10 : 20} // Smaller height for Hot
                        className="object-contain"
                    />
                ) : null
            ))}
        </div>
    );
}




function PropertyCard({ property }) {
    const { image, title, location, beds, baths, sqft, price, priceType, buildYear, addedDate, type, featured, hot } = property;

    const slug = useMemo(() => title.toLowerCase().replace(/\s+/g, "-"), [title]);
    const tags = useMemo(() => [type, ...(featured ? ["Featured"] : []), ...(hot ? ["Hot"] : [])], [type, featured, hot]);

    return (
        <Link href={`/properties/${slug}`} className="block w-full">
            <article className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow h-full">
                {/* Image Section */}
                <div className="relative md:w-72 h-60">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                    {/* Camera & Video Icons with Count (Right-Most) */}
                    <div className="absolute bottom-3 right-3 flex gap-2 bg-black bg-opacity-60 px-2 py-1 rounded-lg">
                        <div className="flex items-center text-white text-sm">
                            <Camera className="h-4 w-4 mr-1" /> <span>12</span> {/* Replace with actual count */}
                        </div>
                        <div className="flex items-center text-white text-sm">
                            <Video className="h-4 w-4 mr-1" /> <span>5</span> {/* Replace with actual count */}
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 p-4"> {/* Kept padding optimal */}
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <Tags tags={tags} />
                            <h2 className="text-[17px] font-semibold text-black font-['DM Sans']">{title}</h2>
                            <div className="flex items-center text-[14px] text-black">
                                <MapPin className="h-4 w-4 text-blue-500 mr-1 flex-shrink-0" />
                                <span className="line-clamp-1">{location}</span>
                            </div>
                        </div>
                        <div className="text-right ml-4 flex-shrink-0">
                            {buildYear && <div className="text-xs text-black">Built {buildYear}</div>}
                            <div className="font-bold text-lg text-black">{price}</div>
                            {priceType && <div className="text-xs text-black">{priceType}</div>}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                        {beds && (
                            <div className="flex items-center text-sm text-black">
                                <Bed className="h-4 w-4 text-blue-500 mr-1" />
                                <span>{beds}</span>
                            </div>
                        )}
                        {baths && (
                            <div className="flex items-center text-sm text-black">
                                <Bath className="h-4 w-4 text-blue-500 mr-1" />
                                <span>{baths}</span>
                            </div>
                        )}
                        <div className="flex items-center text-sm text-black">
                            <Square className="h-4 w-4 text-blue-500 mr-1" />
                            <span>{sqft}</span>
                        </div>
                    </div>
                    <div className="text-xs text-black">Added: {addedDate}</div>

                    {/* Images above buttons */}
                    <div className="flex justify-end gap-2 mt-2">
                        <img src="/share.png" alt="icon1" className="w-8 h-8" />
                        <img src="/share2.png" alt="icon2" className="w-8 h-8" />
                    </div>

                    <div className="flex gap-2 justify-end mt-2">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-[18px] font-semibold font-['DM Sans']">
                            WhatsApp Us
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-[18px] font-semibold font-['DM Sans']">
                            Get a Call
                        </button>
                    </div>
                </div>


            </article>
        </Link>
    );
}

export default function PropertiesListFullwidth() {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-1">
            <div className="flex items-center text-sm mb-2">
                <Link href="/" className="text-gray-700 hover:underline">Home</Link>
                <span className="mx-2 text-gray-500">›</span>
                <span className="text-blue-500">Properties List</span>
            </div>
            <h1 className="text-[30px] font-semibold text-gray-900 mb-3 font-['DM_Sans']">
                Properties List Fullwidth
            </h1>
            <div className="grid grid-cols-1 gap-6">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}
