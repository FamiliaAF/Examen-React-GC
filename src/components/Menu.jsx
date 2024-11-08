import Category from './Category';

const Menu = () => {
  const menu = [
    { 
      id: 1,
      title: "Entradas", 
      dishes: [
        { id: 1, name: "Bruschetta", vegetarian: true },
        { id: 2, name: "Alitas de Pollo", vegetarian: false }
      ]
    },
    { 
      id: 2,
      title: "Plato Fuerte", 
      dishes: [
        { id:3, name: "Pasta Alfredo", vegetarian: true },
        { id: 4, name: "Costillas BBQ", vegetarian: false }
      ]
    }
  ];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'gainsboro',
      padding: '1em',
      borderRadius: '0.5em',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#333',
      }}>Menú</h1>
      {menu.map(({id, title, dishes}) => (
        <Category key={id} title={title} dishes={dishes} />
      ))}
    </div>
  );
};

export default Menu;