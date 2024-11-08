import NewsCategory from './NewsCategory';

const NewsPanel = () => {
  const newsCategories = [
    { 
      name: "Tecnología", 
      articles: [
        { title: "Nuevo teléfono lanzado", description: "Este es el último teléfono de alta gama lanzado por la marca X", featured: true },
        { title: "IA en medicina", description: "Los avances en IA están transformando la industria de la salud", featured: false }
      ]
    },
    { 
      name: "Deportes", 
      articles: [
        { title: "Final de la liga", description: "El equipo A ganó el campeonato en una final épica", featured: true },
        { title: "Jugador retirado", description: "El famoso jugador se retira tras 20 años de carrera", featured: false }
      ]
    }
  ];

  return (
    <div style={{
      padding: '1em',
      backgroundColor: '#f4f6f9',
    }}>
      {newsCategories.map((category, index) => (
        <NewsCategory key={index} category={category} />
      ))}
    </div>
  );
};

export default NewsPanel;