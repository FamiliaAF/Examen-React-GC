import Dish from './Dish';

const Category = ({ title, dishes }) => {
  return (
    <div style={{
      marginBottom: '1em',
      padding: '1em',
      backgroundColor: '#fff',
      borderRadius: '0.5em',
    }}>
      <h2 style={{
        fontSize: '1em',
        color: '#555',
        marginBottom: '0.5em',
        textTransform: 'uppercase',
      }}>{title}</h2>
      {dishes.map(({id, name, vegetarian}) => (
        <Dish key={id} name={name} vegetarian={vegetarian} />
      ))}
    </div>
  );
};

export default Category;