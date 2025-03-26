export function MoreInfoSection({ property }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">More Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Age:</span>
            <span>{property.buildYear ? `${new Date().getFullYear() - parseInt(property.buildYear)} Years` : "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Insurance:</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Garden & Field:</span>
            <span>2400 sqft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Elevator:</span>
            <span>2 Large</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Fireplace:</span>
            <span>Yes</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Type:</span>
            <span>{property.type || "Apartment"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">3rd Party:</span>
            <span>No</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Total Floor:</span>
            <span>3 Floor</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="text-[#6d7175]">Dining Capacity:</span>
            <span>20 People</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Heating System:</span>
            <span>Floor Heating</span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Installment Facility:</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Swimming Pool:</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Security:</span>
            <span>3-Step Security</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6d7175]">Exit:</span>
            <span>3 Exit Gate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
