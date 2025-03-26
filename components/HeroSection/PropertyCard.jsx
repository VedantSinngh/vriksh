import Image from "next/image";

export const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded shadow">
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-medium">{property.title}</h3>
          <span className="font-bold">${property.price.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">{property.location}</p>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-sm">
            Whatsapp Us
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-sm">
            Get a Call
          </button>
        </div>
      </div>
    </div>
  );
};