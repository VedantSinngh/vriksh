import { Button } from "@/components/ui/button";

export function SearchProperty() {
  return (
    <div className="border rounded-lg p-6 space-y-6">
      <h3 className="text-lg font-medium text-black">Search Similar Properties</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="keyword">Keyword</label>
          <input
            id="keyword"
            type="text"
            placeholder="e.g., Luxury Apartment"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter city or area"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="price">Price Range</label>
          <input
            id="price"
            type="text"
            placeholder="e.g., $500,000 - $1,000,000"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-black" htmlFor="bedrooms">Bedrooms</label>
            <input
              id="bedrooms"
              type="number"
              min="1"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-black" htmlFor="bathrooms">Bathrooms</label>
            <input
              id="bathrooms"
              type="number"
              min="1"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="property-type">Property Type</label>
          <select
            id="property-type"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          >
            <option value="">Select Type</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>
        <Button className="w-full gradient-bg">Search Properties</Button>
      </div>
    </div>
  );
}