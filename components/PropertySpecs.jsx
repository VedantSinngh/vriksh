export function PropertySpecs({ property }) {
  return (
    <div className="flex flex-wrap justify-between border-y py-4 text-[#6D7175] font-barlow text-sm">
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Rooms:&nbsp;</span>
        <span className="font-medium">{property.beds ? property.beds + 2 : "N/A"}</span>
      </div>
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Beds:&nbsp;</span>
        <span className="font-medium">{property.beds || "N/A"}</span>
      </div>
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Area:&nbsp;</span>
        <span className="font-medium">{property.sqft || "N/A"} Sqft²</span>
      </div>
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Baths:&nbsp;</span>
        <span className="font-medium">{property.baths || "N/A"}</span>
      </div>
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Car Garage:&nbsp;</span>
        <span className="font-medium">Yes (5 Capacity)</span>
      </div>
      <div className="w-1/3 flex items-center">
        <span className="uppercase font-semibold">Swimming:&nbsp;</span>
        <span className="font-medium">Yes (1 Large)</span>
      </div>
    </div>
  );
}
