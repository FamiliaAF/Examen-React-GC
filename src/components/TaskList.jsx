import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = [
    { title: "Hacer la compra", completed: false },
    { title: "Estudiar React", completed: true },
    { title: "Limpiar la casa", completed: false }
  ];

  return (
    <div 
      style={{
        padding: '1em',
        backgroundColor: '#f0f2f5',
        border: '2px solid gainsboro',
        borderRadius: '1em',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>Lista de Tareas</h1>
      {tasks.map(({title, completed , index}) => (
        <TaskItem key={index} title={title} completed={completed} />
      ))}
    </div>
  );
};

export default TaskList;