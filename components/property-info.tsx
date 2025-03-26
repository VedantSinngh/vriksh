interface Property {
  id: number;
  buildYear?: string;
  type: string;
  sqft?: string;
}

interface PropertyInfoProps {
  property: Property;
}

export default function PropertyInfo({ property }) {
    return (
        <div className="max-w-4xl p-6 text-[#1d1d1f] text-left pl-6">
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">More Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Age :</span>
                        <span>{property.buildYear ? `${new Date().getFullYear() - parseInt(property.buildYear)} Years` : 'N/A'}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Type :</span>
                        <span>{property.type.split(' ')[1]}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Installment Facility :</span>
                        <span>Yes</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Insurance :</span>
                        <span>Yes</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">3rd Party :</span>
                        <span>No</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Swimming Pool :</span>
                        <span>Yes</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Garden & Trail :</span>
                        <span>2400sqft</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Total Floor :</span>
                        <span>17 Floor</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Security :</span>
                        <span>3 Step Security</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Elevator :</span>
                        <span>2 Large</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Driving Capacity :</span>
                        <span>20 People</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Exit :</span>
                        <span>3 Exit Gate</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Fire Place :</span>
                        <span>Yes</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 text-[#6d7175]">Heating System :</span>
                        <span>Floor Heating</span>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Property Summary</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
                    <div>
                        <p className="text-[#6d7175] mb-1">Property ID :</p>
                        <p>LA{property.id}8227</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Listing Type :</p>
                        <p>{property.type}</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Property Type :</p>
                        <p>{property.type.split(' ')[1]}</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Current Owner :</p>
                        <p>Green Developers LTD</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Insurance :</p>
                        <p>Yes</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Architecture :</p>
                        <p>Nova Society</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Total Floor :</p>
                        <p>10 Story Building</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Year of Built :</p>
                        <p>{property.buildYear || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Furniture Type :</p>
                        <p>High Class</p>
                    </div>
                    <div>
                        <p className="text-[#6d7175] mb-1">Payment Way :</p>
                        <p>Installment / Cash</p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3">
                    {[
                        "Fitness Lab and Room",
                        "Swimming Pools",
                        "Parking Facility",
                        "Green Park View",
                        "Playground Include",
                        "Garden",
                        "Kitchen Furniture",
                        "Fire Security",
                        "High Class Door",
                        "Store Room",
                        "Marble Floor",
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <svg
                                className="w-4 h-4 text-[#0196ff] mr-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Floor Plans</h2>
                <div className="space-y-2">
                    <div className="bg-[#f8f5f0] p-3 rounded">
                        <p>Floor Plans ({property.sqft})</p>
                    </div>
                    <div className="bg-[#f8f5f0] p-3 rounded">
                        <p>Garage Plans ({property.sqft})</p>
                    </div>
                    <div className="bg-[#f8f5f0] p-3 rounded">
                        <p>Garden Plans (2400 sqft)</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Nearby Places</h2>
                <div className="mb-4 border-b">
                    <div className="flex">
                        <button className="px-4 py-2 text-[#0196ff] border-b-2 border-[#0196ff]">Hospital</button>
                        <button className="px-4 py-2">Shopping</button>
                        <button className="px-4 py-2">School</button>
                        <button className="px-4 py-2">Restaurant</button>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 mb-2">
                        <div className="font-medium">Name</div>
                        <div className="font-medium">Distance</div>
                        <div className="font-medium">Type</div>
                    </div>
                    <div className="grid grid-cols-3 py-3 border-b">
                        <div>Massachusetts General Hospital</div>
                        <div>23.7 km</div>
                        <div>Medical College</div>
                    </div>
                    <div className="grid grid-cols-3 py-3 border-b">
                        <div>Langone Medical Center</div>
                        <div>13.2 km</div>
                        <div>Hart Hospital</div>
                    </div>
                    <div className="grid grid-cols-3 py-3 border-b">
                        <div>Mount Sinai Hospital</div>
                        <div>58.0 km</div>
                        <div>Eye Hospital</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
