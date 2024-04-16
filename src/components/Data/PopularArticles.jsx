import articlesList from "./ArticlesList.jsx";

const getRandomArticle = () => {
    // Выбираем случайную категорию
    const categories = Object.keys(articlesList);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Получаем массив статей для выбранной категории
    const articles = articlesList[randomCategory];

    // Выбираем случайную статью из массива
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
};

// Создаем массив случайных статей
const popularArticles = [];
const numberOfRandomArticles = 6; // Желаемое количество случайных статей

for (let i = 0; i < numberOfRandomArticles; i++) {
    popularArticles.push(getRandomArticle());
}
export default popularArticles