import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory, categories } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const category = categories.find(c => c.slug === params.slug);
    return {
        title: category ? `${category.name} - Noticias MX` : 'Categoría',
    };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const articles = getArticlesByCategory(params.slug);
    const categoryName = categories.find(c => c.slug === params.slug)?.name;

    if (!categoryName) return notFound();

    return (
        <section>
            <h1 className="text-3xl font-bold mb-6 capitalize border-b pb-2">
                Noticias: {categoryName}
            </h1>
            {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <p>No hay noticias en esta sección por el momento.</p>
            )}
        </section>
    );
}