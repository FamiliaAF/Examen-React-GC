const ProductItem = ({ name, price, available }) => {
  return (
    <div 
    style={{
      border: '1px solid gainsboro',
      backgroundColor: '#eeeeee',
      borderRadius: '0.5em',
      display: 'flex',
      justifyContent: 'space-between',
      padding:'0.5em',
      alignItems: 'center',
      color: '#333' 
    }}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p style={{
        color: available ? '#59a014' : '#c14218'  
      }}>{available ? "Disponible" : "Indisponible"}</p>
    </div>
  )
}

export default ProductItem
