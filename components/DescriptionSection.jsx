export function DescriptionSection({ property }) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">Description</h2>
            <p className="text-black text-sm leading-relaxed">
                This exquisite {property.type.split(" ")[1].toLowerCase()} in {property.location} offers a blend of luxury and
                functionality. Spanning {property.sqft}, it features {property.beds || "multiple"} bedrooms,{" "}
                {property.baths || "several"} bathrooms, and premium amenities like a large swimming pool and a 5-car garage.
                Built in {property.buildYear || "recent years"}, this property is designed with modern architecture by Nova
                Society and includes high-class furniture throughout.
            </p>
            <p className="text-black text-sm leading-relaxed">
                Enjoy additional perks such as a 2400 sqft garden, floor heating, and 3-step security system. Perfect for
                families or investors, this property promises comfort, safety, and an upscale lifestyle in a prime location.
            </p>
        </div>
    );
}