// src/components/NewsCard.tsx
import Link from 'next/link';

interface ArticleProps {
    article: {
        slug: string;
        title: string;
        description: string;
        image: string;
        category: string;
    }
}

export default function NewsCard({ article }: ArticleProps) {
    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <span className="text-xs font-bold text-blue-600 uppercase">
                    {article.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-2 leading-tight">
                    {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description}
                </p>
                <Link
                    href={`/noticia/${article.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Leer más &rarr;
                </Link>
            </div>
        </div>
    );
}