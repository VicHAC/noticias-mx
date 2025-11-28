import { getArticleBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

// 1. GENERACIÓN DE SEO AUTOMÁTICO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = getArticleBySlug(params.slug);

    if (!article) return { title: 'Noticia no encontrada' };

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [article.image], // Imagen que se verá al compartir en redes
            type: 'article',
            publishedTime: article.date,
            authors: ['Redacción Noticias MX'],
        },
    };
}

// 2. RENDERIZADO DE LA NOTICIA
export default function ArticlePage({ params }: Props) {
    const article = getArticleBySlug(params.slug);

    if (!article) return notFound();

    return (
        <article className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm mt-6">
            <header className="mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase">
                    {article.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900">
                    {article.title}
                </h1>
                <time className="text-gray-500 text-sm">
                    Publicado el {article.date}
                </time>
            </header>

            <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none text-gray-800">
                {/* Aquí iría el contenido HTML si viniera de un CMS */}
                <p>{article.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </article>
    );
}