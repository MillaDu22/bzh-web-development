import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import articlesData from '../../data/articles.json';
import './blog.css';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Trier les articles par date (du plus récent au plus ancien)
        const sortedArticles = articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sortedArticles);
    }, []);

    return (
        <>
            <Helmet>
                <title>Blog d'Armor Web Creations | Articles et conseils en développement web</title>
                <meta 
                    name="description" 
                    content="Explorez le blog d'Armor Web Creations pour des articles sur le développement web, les tendances actuelles et des conseils pratiques pour améliorer votre présence en ligne." 
                />
                <meta 
                    name="keywords" 
                    content="développement web, création de sites internet, conseils web, tendances web, hébergement web, optimisation SEO, sites vitrines, e-commerce, articles, blog Armor Web Creations" 
                />
            </Helmet>
            <section className="blog-container">
                <h1 className="blog-title">Le blog d'Armor Web Creations</h1>
                {articles.length === 0 ? (
                    <p>Chargement des articles...</p>
                ) : (
                    articles.map((article) => (
                        <article key={article.id} className="blog-article">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-date">{article.date}</p>
                            <p className="article-intro">{article.intro}</p>
                            {article.content.map((paragraph, index) => (
                                <p key={index} className="article-content">{paragraph}</p>
                            ))}
                        </article>
                    ))
                )}
            </section>
        </>    
    );
}

export default Blog;
