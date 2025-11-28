import NewsCard from '@/components/NewsCard';
import { getArticles } from '@/lib/data';

export default function Home() {
  const articles = getArticles(); // Obtiene todas ordenadas por fecha

  return (
    <section>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Últimas Noticias</h1>
        <p className="text-gray-500">Mantente informado con lo más reciente.</p>
      </div>

      {/* Grid Responsivo: 1 col móvil, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}