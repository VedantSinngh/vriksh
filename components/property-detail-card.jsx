import Image from "next/image";
import { Check, Download, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PropertyDetailCard({ property }) {
    return (
        <div className="flex flex-col text-black">
            <div className="w-full mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                            <Image src={property.image} alt={property.title} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative w-full h-[152px] rounded-lg overflow-hidden">
                            <Image src="/about1.png" alt="Living room" fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[152px] rounded-lg overflow-hidden">
                            <Image src="/about2.png" alt="Interior design" fill className="object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <span className="text-white text-2xl font-bold">10+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <Badge className="bg-[#0196ff]/10 text-[#0196ff] hover:bg-[#0196ff]/20 rounded-sm">
                            {property.type.split(' ')[1].toUpperCase()}
                        </Badge>
                        <div className="flex flex-wrap justify-between items-start mt-2">
                            <div>
                                <h1 className="text-2xl font-bold text-black">{property.title}</h1>
                                <div className="flex items-center text-black mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{property.location}</span>
                                </div>
                                <div className="text-sm text-black mt-1">(100 People Recommended)</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-[#0196ff]">{property.price}</div>
                                <div className="text-sm text-black">
                                    {property.priceType ? `(${property.priceType})` : '(Price Only)'}
                                </div>
                                <Button size="sm" className="mt-2 gradient-bg">
                                    <span className="text-xs">Contact</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">Special Price</span>
                            <span className="text-black">Get extra 15% off (price inclusive of discount)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">Bank Offer</span>
                            <span className="text-black">10% instant discount on VISA Cards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">No cost EMI $149/month.</span>
                            <span className="text-black">Standard EMI also available</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="rounded-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y py-4">
                        <div>
                            <div className="text-sm text-black">Rooms:</div>
                            <div className="font-medium text-black">{property.beds ? property.beds + 2 : 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Beds:</div>
                            <div className="font-medium text-black">{property.beds || 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Area:</div>
                            <div className="font-medium text-black">{property.sqft}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Swimming:</div>
                            <div className="font-medium text-black">Yes (1 Large)</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Baths:</div>
                            <div className="font-medium text-black">{property.baths || 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Car Garage:</div>
                            <div className="font-medium text-black">Yes (5 Capacity)</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-black">Description</h2>
                        <p className="text-black text-sm leading-relaxed">
                            Maecenas egestas quam et volutpat bibendum metus vulputate platea eleifend sed integer dictum ultricies
                            consectetur nunc vivamus a. Eu nulla justo magna lacinia purus sodales scelerisque. Sociosqu pede
                            facilisi. Curae; lacinia id. Sociis pretium gravida auctor mus amet accumsan adipiscing id dignissim,
                            potenti.
                        </p>
                        <p className="text-black text-sm leading-relaxed">
                            Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempor. Magnis mollis
                            lobortis nam, montes ut consequat sed amet nullam, malesuada nascetur ornare sociosqu magna cum gravida
                            quam tincidunt dapibus tellus felis nibh inceptos tellus convallis facilisis torquent.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium text-black">Highlights:</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Regular Fit.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Full sleeves.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Machine wash, tumble dry.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side bar (Right) */}
                <div className="md:col-span-1 mt-8 md:mt-0">
                    {/* Side bar (Right) */}
                    {/* Side bar (Right) */}
                    <div className="md:col-span-1 mt-8 md:mt-0">
                        <div className="space-y-6">
                            <div className="border rounded-lg p-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-black">Listed By</h3>
                                    <div className="flex items-center gap-4 mt-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                            <Image src="/placeholder.svg" alt="Agent" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-black">Luann McLawhorn</div>
                                            <div className="text-sm text-black">+1(811) 634 5121 info@website.com</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact form */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="name">Your Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="phone">Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="email">Your Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            placeholder="Type your message here..."
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        ></textarea>
                                    </div>

                                    <Button className="w-full gradient-bg">Send Message</Button>
                                </div>
                            </div>

                            {/* Search Property Box */}
                            <div className="border rounded-lg p-6 space-y-6">
                                <h3 className="text-lg font-medium text-black">Search Property</h3>
                                <div className="space-y-4">

                                    {/* Keyword Search */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="keyword">Enter Keyword</label>
                                        <input
                                            id="keyword"
                                            type="text"
                                            placeholder="Enter keyword..."
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    {/* Existing Filters: Location, Property Types, Property Status */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="location">Location</label>
                                        <input
                                            id="location"
                                            type="text"
                                            placeholder="Enter location"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-black">Property Types</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-black"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                        <div className="w-full px-3 py-2 border rounded-md text-black">Select</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-black">Property Status</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-black"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                        <div className="w-full px-3 py-2 border rounded-md text-black">Select</div>
                                    </div>

                                    {/* New Filters: Price, Bedrooms, Bathrooms, Garage */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="price">Price</label>
                                        <input
                                            id="price"
                                            type="text"
                                            placeholder="Enter price range"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="bedrooms">Bedrooms</label>
                                        <input
                                            id="bedrooms"
                                            type="number"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="bathrooms">Bathrooms</label>
                                        <input
                                            id="bathrooms"
                                            type="number"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="garage">Garage</label>
                                        <input
                                            id="garage"
                                            type="number"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    {/* Min & Max Area (Side by Side) */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm text-black" htmlFor="min-area">Min Area (sqft)</label>
                                            <input
                                                id="min-area"
                                                type="number"
                                                placeholder="Min Area"
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-black" htmlFor="max-area">Max Area (sqft)</label>
                                            <input
                                                id="max-area"
                                                type="number"
                                                placeholder="Max Area"
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                            />
                                        </div>
                                    </div>

                                    {/* Advanced Options */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-black" htmlFor="advanced">Advanced Options</label>
                                        <input
                                            id="advanced"
                                            type="checkbox"
                                            className="w-4 h-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                        />
                                    </div>

                                    <Button className="w-full gradient-bg">Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}