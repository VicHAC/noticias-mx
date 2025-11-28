// src/components/Navbar.tsx
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
                    📰 Noticias MX
                </Link>
                <ul className="flex space-x-6">
                    {categories.map((cat) => (
                        <li key={cat.slug}>
                            <Link
                                href={cat.slug === '/' ? '/' : `/categoria/${cat.slug}`}
                                className="hover:text-blue-400 transition-colors uppercase text-sm font-semibold"
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}