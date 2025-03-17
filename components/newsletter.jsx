export function Newsletter() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[rgb(74,58,255)] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subcribe to our Newsletter</h2>
                        <p className="text-white/80 max-w-md">
                            Subscribe for Updates: Stay informed about the latest investor updates, financial results, and
                            announcements by subscribing to our newsletter.
                        </p>
                    </div>

                    <div className="flex items-center">
                        <form className="w-full flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-md bg-transparent text-white placeholder:text-white/60 border-0 focus:ring-2 focus:ring-white/50"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-white text-[rgb(74,58,255)] font-medium rounded-md hover:bg-white/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

