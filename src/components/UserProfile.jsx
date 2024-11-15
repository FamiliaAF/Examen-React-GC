import UserAge from "./UserAge";

const UserProfile = ({ name, age, active }) => {
  return (
    <div 
      style={{
        padding: '0.5em',
        margin: '0.5em',
        borderRadius: '0.5em',
        backgroundColor: active ? '#aacd8f' : '#d9d9d9',
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
            color: active ? '#466f32' : '#333',
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
        <UserAge age={age} />
      </div>
      <p 
        style={{
          fontSize: '0.7em',
          color: active ? '#466f32' : '#333',
          fontWeight: 'bold',
        }}
      >
        {active ? "Activo" : "Inactivo"}
      </p>
    </div>
  );
};

export default UserProfile;