import Link from "next/link";

export const Footer1 = () => {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Sections",
            description: "Explore our community and services",
            items: [
                {
                    title: "About Us",
                    href: "/#about-us",
                },
                {
                    title: "Coaches",
                    href: "/#coaches",
                },
                {
                    title: "Athletes",
                    href: "/#athletes",
                },
                {
                    title: "Locations",
                    href: "/#locations",
                },
            ],
        },
        {
            title: "Community",
            description: "Connect with our parkour family",
            items: [
                {
                    title: "Tutoring",
                    href: "/tutoring",
                },
                {
                    title: "Stunts",
                    href: "/stunts",
                },
                {
                    title: "Store",
                    href: "/#store",
                },
                {
                    title: "Contact",
                    href: "/contact",
                },
            ],
        },
    ];

    return (
        <div className="w-full py-20 lg:py-40 bg-foreground text-background">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                Marrakech Parkour
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                Redefining urban movement in Marrakech
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <p>Marrakech, Morocco</p>
                                <p>Urban Movement Community</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center hover:text-orange-500 transition-colors"
                                        >
                                            <span className="text-xl">{item.title}</span>
                                        </Link>
                                    ) : (
                                        <p className="text-xl">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="flex justify-between items-center hover:text-orange-500 transition-colors"
                                            >
                                                <span className="text-background/75">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20 flex justify-center gap-6">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-6 text-background/75 hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-6 text-background/75 hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};