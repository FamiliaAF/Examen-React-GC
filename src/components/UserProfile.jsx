const UserProfile = ({ name, age, active }) => {
  return (
    <div 
      style={{
        padding: '0.5em',
        margin: '0.5em',
        borderRadius: '0.5em',
        backgroundColor: active ? '#b9daf6' : '#f8d7da',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h2 
          style={{
            fontSize: '1em',
            margin: 0,
            color: active ? '#186fc1' : '#721c24',
          }}
        >
          {name}
        </h2>
        <p 
          style={{
            fontSize: '16px',
            color: '#555',
            margin: '5px 0',
          }}
        >
          {age} años
        </p>
      </div>
      <span 
        style={{
          fontSize: '0.7em',
          color: active ? '#186fc1' : '#b02716',
          fontWeight: 'bold',
        }}
      >
        {active ? "Activo" : "Inactivo"}
      </span>
    </div>
  );
};

export default UserProfile;