import Image from "next/image";
import Link from "next/link";

export const TestimonialSection = ({ trendingArticles }) => {
    return (
        <section className="py-16 px-4" style={{ backgroundColor: 'rgb(246, 249, 255)' }}>
            <div className="container mx-auto">
                <div className="mb-16 relative">
                    <div className="max-w-[1100px] mx-auto text-center">
                        <h2 className="text-3xl md:text-[42px] font-semibold text-gray-900 mb-6 text-center leading-tight">
                            Finding My Dream Home Was Seamless With <br />
                            Mindestate. Their Expertise And Guidance Made The <br />
                            Process Stress-Free. Thank You!
                        </h2>
                        {/* Responsive green line */}
                        <div className="flex justify-center">
                            <div className="h-[4px] w-full max-w-[1075px] bg-[#34A853] mx-auto"></div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-100">
                                <Image
                                    src="/google.png" // Make sure this exists in public folder
                                    alt="Google Rating"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                    priority
                                />
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center">
                                        <span className="font-bold text-lg text-gray-800 mr-2">4.8</span>
                                        <div className="flex" aria-label="5-star rating">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={`star-${i}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-yellow-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">Total of 142 reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-8 px-4">
                        <h2 className="font-['Source_Sans_Pro'] font-semibold text-[48px] text-gray-900 ml-4">What's in Trending</h2>
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors"
                            aria-label="View all trending articles"
                        >
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-[40px] max-w-full">
  {trendingArticles.map(article => (
    <div key={article.id} className="bg-transparent rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg max-w-[399px] w-full">
      <div className="relative w-full h-[299px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">
          {article.title}
        </h3>
        <Link
          href={article.link}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          aria-label={`Read more about ${article.title}`}
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  ))}
</div>
                </div>
            </div>
        </section>
    );
};