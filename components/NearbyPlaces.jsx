export function NearbyPlaces() {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Nearby Places</h2>
        <div className="border-b">
          <div className="flex gap-4">
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
          <div className="space-y-2">
            <div className="grid grid-cols-3 py-2 border-b">
              <div>Massachusetts General</div>
              <div>23.7 km</div>
              <div>Medical College</div>
            </div>
            <div className="grid grid-cols-3 py-2 border-b">
              <div>Langone Medical Center</div>
              <div>13.2 km</div>
              <div>Hart Hospital</div>
            </div>
            <div className="grid grid-cols-3 py-2 border-b">
              <div>Mount Sinai Hospital</div>
              <div>58.0 km</div>
              <div>Eye Hospital</div>
            </div>
          </div>
        </div>
      </div>
    );
  }