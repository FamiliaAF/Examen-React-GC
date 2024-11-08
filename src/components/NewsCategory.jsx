import NewsItem from './NewsItem';

const NewsCategory = ({ category }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2 style={{
        fontSize: '1.8em',
        marginBottom: '0.5em',
        color: '#333',
        borderBottom: '2px solid #333',
        paddingBottom: '8px',
      }}>
        {category.name}
      </h2>
      {category.articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsCategory;