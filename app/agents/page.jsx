// import { Logo } from "@/components/logo"
import { PropertyDetailCard } from "@/components/property-detail-card"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <PropertyDetailCard />
            </main>
        </div>
    )
}

