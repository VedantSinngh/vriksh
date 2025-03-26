import { Search } from "lucide-react";

export function ProductSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative w-full h-[400px] bg-gray-200 overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/product.png')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Thaltej / Ahmedabad</h1>

          {/* Filter Section */}
          <div className="w-[1280px] h-[85px] bg-white/10 backdrop-blur-sm p-2 rounded-[12px] mx-auto flex items-center gap-4">
            {/* Dropdowns - Flex Grow to Occupy Full Space */}
            <div className="flex flex-1 gap-4">
              {/* Dropdown 1 */}
              <div className="relative flex-1 h-[56px]">
                <select className="w-full h-full p-3 rounded-[12px] bg-white text-black appearance-none pr-10">
                  <option>All Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5L11 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Dropdown 2 */}
              <div className="relative flex-1 h-[56px]">
                <select className="w-full h-full p-3 rounded-[12px] bg-white text-black appearance-none pr-10">
                  <option>All Main Locations</option>
                  <option>Thaltej</option>
                  <option>Ahmedabad</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5L11 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Dropdown 3 */}
              <div className="relative flex-1 h-[56px]">
                <select className="w-full h-full p-3 rounded-[12px] bg-white text-black appearance-none pr-10">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5L11 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button - Fixed Width */}
            <button className="w-[116px] h-[56px] bg-[#5A01FF] hover:bg-accent/90 text-white rounded-[8px] flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
