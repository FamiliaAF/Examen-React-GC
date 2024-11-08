const NewsItem = ({ article }) => {
  const { title, description, featured } = article;

  return (
    <div 
      style={{
        border: `2px solid ${featured ? '#333' : '#ddd'}`,
        backgroundColor: featured ? 'aliceblue' : '#fff',
        padding: '1em',
        margin: '1em',
        borderRadius: '0.5em',
      }}
    >
      <h3 style={{ fontWeight: featured ? 'bold' : 'normal', color: '#333' }}>{title}</h3>
      <p style={{ color: '#555', marginTop: '5px' }}>{description}</p>
    </div>
  );
};

export default NewsItem;