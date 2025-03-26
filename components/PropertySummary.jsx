export function PropertySummary({ property }) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Property Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <p className="text-[#6d7175] mb-1">Property ID:</p>
                    <p>LA{property.id}8227</p>
                </div>
                <div>
                    <p className="text-[#6d7175] mb-1">Listing Type:</p>
                    <p>{property.type}</p>
                </div>
                <div>
                    <p className="text-[#6d7175] mb-1">Owner:</p>
                    <p>Green Developers LTD</p>
                </div>
                <div>
                    <p className="text-[#6d7175] mb-1">Year Built:</p>
                    <p>{property.buildYear || "N/A"}</p>
                </div>
            </div>
        </div>
    );
}