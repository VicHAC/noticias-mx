import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory, categories } from '@/lib/data';
import { notFound } from 'next/navigation';

// Definimos el tipo con Promise para Next.js 15
type Props = {
    params: Promise<{ slug: string }>;
};

// 1. GENERAR METADATA (SEO)
export async function generateMetadata({ params }: Props) {
    const { slug } = await params; // <--- Esperamos los params
    const category = categories.find(c => c.slug === slug);

    return {
        title: category ? `${category.name} - Noticias MX` : 'Categoría no encontrada',
        description: `Las últimas noticias sobre ${category?.name || 'México'}`
    };
}

// 2. RENDERIZAR LA PÁGINA
export default async function CategoryPage({ params }: Props) {
    const { slug } = await params; // <--- Esperamos los params aquí también

    // Verificamos si la categoría existe en nuestra "base de datos"
    const categoryExists = categories.find(c => c.slug === slug);

    // Si la categoría no está en la lista de permitidas (data.ts), lanzamos 404
    if (!categoryExists) {
        return notFound();
    }

    const articles = getArticlesByCategory(slug);

    return (
        <section>
            <header className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold capitalize text-gray-800">
                    Sección: <span className="text-blue-600">{categoryExists.name}</span>
                </h1>
            </header>

            {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500 text-lg">
                        📭 Aún no hay noticias publicadas en la sección <strong>{categoryExists.name}</strong>.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Vuelve más tarde para ver actualizaciones.</p>
                </div>
            )}
        </section>
    );
}