import Categories from "@/app/_components/Categories";
import Hero from "@/app/_modules/CategoryPage/Hero";

export default function CategoryPage() {
    const categories = [
        {
            id: "marketplaces",
            label: "Marketplaces",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <path d="M9 22V12h6v10"/>
                <path d="M2 9h20"/>
            </svg>
        },
        {
            id: "taxi",
            label: "Taxi",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <rect x="1" y="13" width="22" height="8" rx="2"/>
                <path d="M4 13L6 7h12l2 6"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
            </svg>
        },
        {
            id: "rent",
            label: "Rent",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                <polyline points="21 3 21 8 16 8"/>
            </svg>
        },
        {
            id: "hotels",
            label: "Hotels",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <path d="M9 22v-4h6v4"/>
                <path d="M8 6h.01"/>
                <path d="M16 6h.01"/>
                <path d="M8 10h.01"/>
                <path d="M16 10h.01"/>
                <path d="M8 14h.01"/>
                <path d="M16 14h.01"/>
            </svg>
        },
        {
            id: "restaurants",
            label: "Restaurants",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
                <line x1="6" y1="2" x2="6" y2="5"/>
                <line x1="10" y1="2" x2="10" y2="5"/>
                <line x1="14" y1="2" x2="14" y2="5"/>
            </svg>
        },
        {
            id: "meet",
            label: "Meet",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        },
        {
            id: "fueling",
            label: "Fueling",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M3 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                <path d="M7 9h6"/>
                <path d="M17 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>
                <rect x="5" y="13" width="10" height="6"/>
            </svg>
        },
        {
            id: "transfer",
            label: "Transfer",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path
                    d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L19 10V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v6l-2.5 1.1C1.7 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
                <path d="M7 17l-1 4"/>
                <path d="M17 17l1 4"/>
                <rect x="5" y="6" width="14" height="6"/>
                <circle cx="8" cy="14" r="1"/>
                <circle cx="16" cy="14" r="1"/>
            </svg>
        },
        {
            id: "coupon",
            label: "Coupon",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <circle cx="9.5" cy="9.5" r=".5"/>
                <circle cx="14.5" cy="14.5" r=".5"/>
            </svg>
        },
        {
            id: "photo",
            label: "Photo",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
            </svg>
        },
        {
            id: "medicine",
            label: "Medicine",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path
                    d="M20.42 4.58a5 5 0 0 0-7.07 0L12 5.93L10.65 4.58a5.001 5.001 0 0 0-7.07 7.07L12 20.42l8.42-8.77a5 5 0 0 0 0-7.07z"/>
                <path d="M12 9v6"/>
                <path d="M9 12h6"/>
            </svg>
        },
        {
            id: "shops",
            label: "Shops",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
        },
        {
            id: "referral",
            label: "Referral program",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        },
        {
            id: "flights",
            label: "Flights",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <path
                    d="M17.8 19.2L16 11l3.5-3.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L13.5 8.5 5.3 6.7c-1.1-.3-2.2.4-2.4 1.5l-.3 1.4c-.1.5.1 1 .5 1.3L9 15l-3.3 3.3c-.4.4-.4 1 0 1.4l1.3 1.3c.4.4 1 .4 1.4 0L11.7 18l3.3 5.7c.3.4.8.6 1.3.5l1.4-.3c1.2-.2 1.9-1.3 1.6-2.4l-1.5-2.3z"/>
            </svg>
        },
        {
            id: "subscription",
            label: "App Subscription",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
        }
    ];

    return (
        <main>
            <Hero/>
            <Categories categories={categories}/>
        </main>
    )
}