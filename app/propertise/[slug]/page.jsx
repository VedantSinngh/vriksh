// import { Logo } from "@/components/logo";
import { PropertyDetailCard } from "@/components/property-detail-card"; // Updated import
import { Button } from "@/components/ui/button";

const properties = [
    {
        id: 1,
        slug: "traditional-food-restaurant",
        title: "Traditional Food Restaurant",
        location: "Sunset Drive, Miami, FL, USA",
        price: "$2,600",
        priceType: "Monthly",
        type: "For Rent",
        image: "/product1.png",
        sqft: "950 Sq Ft",
        beds: null,
        baths: null,
    },
    {
        id: 2,
        slug: "villa-on-grand-avenue",
        title: "Villa on Grand Avenue",
        location: "CocoWalk, 3015 Grand Avenue, Miami, USA",
        price: "$4,750",
        priceType: "Monthly",
        type: "For Rent",
        image: "/product2.png",
        sqft: "9350 sq ft",
        beds: 4,
        baths: 4,
    },
    // Add other properties
];

export default function PropertyPage({ property }) {
    return (
        <div className="min-h-screen">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* <Logo /> */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-[#0196ff] font-medium">
                            Home
                        </a>
                        <a href="#" className="text-[#222222] hover:text-[#0196ff] transition-colors">
                            Properties
                        </a>
                        <a href="#" className="text-[#222222] hover:text-[#0196ff] transition-colors">
                            Agents
                        </a>
                        <a href="#" className="text-[#222222] hover:text-[#0196ff] transition-colors">
                            Blog
                        </a>
                    </nav>
                    <Button className="gradient-bg">Contact Us</Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <PropertyDetailCard property={property} />
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = properties.map((property) => ({
        params: { slug: property.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const property = properties.find((p) => p.slug === params.slug);
    return { props: { property } };
}