const UserAge = ({age}) => {
  return (
    <p style={{
      fontSize: '0.8em',
      color: age >= 18 ? '#3C552D' : '#EE4E4E', 
      fontWeight: 'bold'
    }}>
      {age >= 18 ? 'Mayor de edad' : 'Menor de edad'}
    </p>
  )
}

export default UserAge;