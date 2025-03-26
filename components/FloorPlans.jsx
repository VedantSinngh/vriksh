export function FloorPlans({ property }) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Floor Plans</h2>
        <div className="space-y-2">
          <div className="bg-[#f8f5f0] p-3 rounded">
            <p>Main Floor Plan ({property.sqft})</p>
          </div>
          <div className="bg-[#f8f5f0] p-3 rounded">
            <p>Garage Layout (5 Capacity)</p>
          </div>
          <div className="bg-[#f8f5f0] p-3 rounded">
            <p>Garden Design (2400 sqft)</p>
          </div>
        </div>
      </div>
    );
  }