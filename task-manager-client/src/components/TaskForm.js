import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState(task?.status || 'pendente');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, status };

    if (task) {
      axios.put(`/tasks/${task.id}`, newTask).then((response) => {
        onSave(response.data);
      });
    } else {
      axios.post('/tasks', newTask).then((response) => {
        onSave(response.data);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="block">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        ></textarea>
      </div>
      <div>
        <label className="block">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="pendente">Pendente</option>
          <option value="em progresso">Em Progresso</option>
          <option value="concluído">Concluído</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Salvar</button>
    </form>
  );
};

export default TaskForm;


