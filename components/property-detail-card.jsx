import Image from "next/image"
import { Check, Download, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PropertyDetailCard() {
    return (
        <div className="flex flex-col text-black">
            {/* Full width image section */}
            <div className="w-full mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                            <Image src="/contact.png" alt="Bedroom interior" fill className="object-cover" />
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

            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <Badge className="bg-[#0196ff]/10 text-[#0196ff] hover:bg-[#0196ff]/20 rounded-sm">APARTMENT</Badge>
                        <div className="flex flex-wrap justify-between items-start mt-2">
                            <div>
                                <h1 className="text-2xl font-bold text-black">OEUVRE 3</h1>
                                <div className="flex items-center text-black mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>2015 Tree Lane Owensdale, MD 85210</span>
                                </div>
                                <div className="text-sm text-black mt-1">(100 People Recommended)</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-[#0196ff]">$1205500</div>
                                <div className="text-sm text-black">( Price Only )</div>
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
                            <div className="font-medium text-black">7</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Beds:</div>
                            <div className="font-medium text-black">5</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Area:</div>
                            <div className="font-medium text-black">
                                1200 Sqft<sup>2</sup>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Swimming:</div>
                            <div className="font-medium text-black">Yes ( 1 Large )</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Baths:</div>
                            <div className="font-medium text-black">1</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Car Garage:</div>
                            <div className="font-medium text-black">Yes ( 5 Capacity )</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-black">Description</h2>
                        <p className="text-black text-sm leading-relaxed">
                            Maecenas egestas quam et volutpat bibendum metus vulputate platea eleifend sed integer dictum ultricies
                            consectetur nunc vivamus a. Eu nulla justo magna lacinia purus sodales scelerisque. Sociosqu pede
                            facilisi. Curae; lacinia id. Sociis pretium gravida auctor mus amet accumsan adipiscing id dignissim,
                            potenti. Curae; massa ridiculus lobortis consectetur condimentum mollis vulputate hymenaeos tellus egestas
                            auctor dictumst imperdiet cursus quique ut porta molestie dui duis blandit molestie etiam enim erat sociis
                            lacinia litora phasellus sit. Ipsum.Lacinia class enim pharetra interdum potenti tellus parturient.
                            Potenti scelerisque erat facilisi mauris tortor, mattis euismod augue nascetur rutrum augue ipsum tortor
                            dictum porta primis.
                        </p>
                        <p className="text-black text-sm leading-relaxed">
                            Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempor. Magnis mollis
                            lobortis nam, montes ut consequat sed amet nullam, malesuada nascetur ornare sociosqu magna cum gravida
                            quam tincidunt dapibus tellus felis nibh inceptos tellus convallis facilisis torquent. Laoreet pulvinar
                            id. Fringilla lacus tellus lectus erat hac conubia eget quique nisl aliquam nibh molestie nisl hymenaeos
                            id phasellus metus duis inceptos arcu hendrerit ligula blandit lectus nisl fermentum sociosqu pretium eros
                            libero.
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

                <div className="md:col-span-1 mt-8 md:mt-0">
                    <div className="space-y-6">
                        <div className="border rounded-lg p-6 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-black">Listed By</h3>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image src="/placeholder.svg?height=100&width=100" alt="Agent" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-black">Luann McLawhorn</div>
                                        <div className="text-sm text-black">+1(811) 634 5121 info@website.com</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-black">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-black">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-black">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                    />
                                </div>
                                <Button className="w-full gradient-bg">Send Message</Button>
                            </div>
                        </div>

                        <div className="border rounded-lg p-6 space-y-6">
                            <h3 className="text-lg font-medium text-black">Search Property</h3>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Keyword..."
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

                                <Button className="w-full gradient-bg">Search</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}