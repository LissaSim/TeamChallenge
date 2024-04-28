import articlesList from "./ArticlesList.jsx";

const getRandomArticle = () => {
    const categories = Object.keys(articlesList);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const articles = articlesList[randomCategory];

    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
};
 const popularArticles = [];
 export const updatePopularArticles = () => {
    popularArticles.length = 0;

    const numberOfRandomArticles = 6;
    for (let i = 0; i < numberOfRandomArticles; i++) {
        popularArticles.push(getRandomArticle());
    }

    setTimeout(updatePopularArticles, 86400000);
};
 updatePopularArticles();

const numberOfRandomArticles = 6;

for (let i = 0; i < numberOfRandomArticles; i++) {
    popularArticles.push(getRandomArticle());
}
export default popularArticles