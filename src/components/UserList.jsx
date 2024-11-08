import UserProfile from './UserProfile';

const UserList = () => {
  const users = [
    { name: "Ana", age: 20, active: true },
    { name: "Carlos", age: 17, active: false },
    { name: "Luis", age: 30, active: true }
  ];

  return (
    <div 
      style={{
        padding: '1em',
        backgroundColor: '#f0f2f5',
        borderRadius: '0.5em',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>Lista de Usuarios</h1>
      {users.map(({ name, age, active }, index) => (
        <UserProfile key={index} name={name} age={age} active={active} />
      ))}
    </div>
  );
};

export default UserList;