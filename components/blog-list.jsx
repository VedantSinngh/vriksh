import Link from "next/link"
import Image from "next/image"
import { Clock, User } from "lucide-react"

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Devicethread Announces Strategic Partnership With Cloudbeds",
        excerpt:
            "Accelerates 'contactless Check-In' For Hotel And Short-Term Rentals With Its Innovative Smart Access Solution",
        author: "Devicethread",
        date: "APRIL 02, 2024, 11:00 GMT",
        slug: "devicethread-announces-strategic-partnership-with-cloudbeds",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 2,
        title: "5 Tips for First-Time Home Buyers in 2024",
        excerpt:
            "Navigate the challenging real estate market with these expert tips for first-time buyers looking to make their dream purchase this year.",
        author: "Sarah Johnson",
        date: "MARCH 15, 2024, 09:30 GMT",
        slug: "5-tips-for-first-time-home-buyers-2024",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        title: "The Rise of Smart Homes: What Buyers Are Looking For",
        excerpt:
            "Discover the smart home features that today's buyers are prioritizing and how these technologies are reshaping the real estate market.",
        author: "Michael Chen",
        date: "FEBRUARY 28, 2024, 14:45 GMT",
        slug: "rise-of-smart-homes-what-buyers-are-looking-for",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 4,
        title: "Commercial Real Estate Trends to Watch in 2024",
        excerpt:
            "From hybrid work models to sustainable buildings, these are the top commercial real estate trends that investors should keep an eye on.",
        author: "Robert Williams",
        date: "FEBRUARY 10, 2024, 10:15 GMT",
        slug: "commercial-real-estate-trends-2024",
        image: "/placeholder.svg?height=400&width=600",
    },
]

export function BlogList() {
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex items-center text-xs text-gray-500 mb-3">
                                    <div className="flex items-center mr-4">
                                        <User className="w-3 h-3 mr-1" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                <div className="mt-auto">
                                    <span className="text-accent font-medium text-sm group-hover:underline">Read More</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    )
}

