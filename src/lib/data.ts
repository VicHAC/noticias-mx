// src/lib/data.ts

export const categories = [
    { name: 'Inicio', slug: '/' },
    { name: 'CDMX', slug: 'cdmx' },
    { name: 'Nacional', slug: 'nacional' },
    { name: 'Gastronomía', slug: 'gastronomia' },
];

export const articles = [
    {
        id: '1',
        slug: 'nueva-linea-metro-cdmx',
        title: 'Inauguran nueva línea de Metro en CDMX',
        description: 'La jefa de gobierno corta el listón de la nueva obra pública.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia...',
        category: 'cdmx',
        date: '2023-10-25',
        image: '/baguettte.jpg'
    },
    {
        id: '2',
        slug: 'mejores-tacos-mexico',
        title: 'Los 5 mejores tacos de México según expertos',
        description: 'Un recorrido culinario por los sabores más emblemáticos.',
        content: 'Nulla facilisi. Sed non risus. Suspendisse lectus tortor...',
        category: 'gastronomia',
        date: '2023-10-24',
        image: 'https://placehold.co/600x400?text=Tacos'
    },
    {
        id: '3',
        slug: 'economia-nacional-crece',
        title: 'La economía nacional crece un 3% este trimestre',
        description: 'El banco central reporta cifras positivas para el cierre de año.',
        content: 'Cras elementum ultrices diam. Maecenas ligula massa...',
        category: 'nacional',
        date: '2023-10-26', // La más reciente
        image: 'https://placehold.co/600x400?text=Economia'
    },
];

// Función para obtener noticias (simula fetching)
export function getArticles() {
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticlesByCategory(categorySlug: string) {
    return articles.filter((art) => art.category === categorySlug);
}

export function getArticleBySlug(slug: string) {
    return articles.find((art) => art.slug === slug);
}