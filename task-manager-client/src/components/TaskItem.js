import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="border p-4 mb-2">
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      {/* Botões para editar e deletar */}
    </div>
  );
};

export default TaskItem;
