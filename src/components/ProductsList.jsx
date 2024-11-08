import ProductItem from './ProductItem';

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200, available: true },
    { id: 2, name: "Mouse", price: 25, available: false },
    { id: 3, name: "Keyboard", price: 100, available: true }
  ];
  
  
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
    }}>
      {products.map(({ name, price, available, id }) => (
        <ProductItem key={id} name={name} price={price} available={available} />
      ))}
    </div>
  );
}

export default ProductList;
