const Dish = ({ name, vegetarian }) => {
  return (
    <div style={{
      padding: '1em',
      marginBottom: '1em',
      fontSize: '0.8em',
      backgroundColor: '#efefef',
      borderRadius: '0.5em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <span>{name}</span>
      {vegetarian && <span style={{ color: '#28a745', fontWeight: 'bold' }}>🌱</span>}
    </div>
  );
};

export default Dish;