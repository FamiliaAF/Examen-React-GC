const TaskItem = ({ title, completed }) => {
  return (
    <div 
      style={{
        padding: '0 0.7em',
        margin: '0.5em 0',
        borderRadius: '0.5em',
        backgroundColor: completed ? '#d4edda' : '#f8d7da',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2 
        style={{
          fontSize: '1em',
          color: completed ? '#155724' : '#721c24',
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {title}
      </h2>
      <span 
        style={{
          fontSize: '0.7em',
          color: completed ? '#155724' : '#721c24',
          fontWeight: 'bold',
        }}
      >
        {completed ? "Completada" : "Pendiente"}
      </span>
    </div>
  );
};

export default TaskItem;
