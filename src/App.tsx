import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task => task.id !== id)));
  }

  const editTask = (id: number, title: string, difficulty: number) => {
    const editedTask: ITask = { id, title, difficulty }
    const newTaskList: ITask[] = taskList.map((task) => task.id === editedTask.id ? editedTask : task)
    setTaskList(newTaskList);
  }

  return (
    <div className="h-screen">
      <Header />
      <div className='min-h-[80vh] flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl text-[#61dafb] mb-8'>Nova tarefa</h1>
          <TaskForm setTaskList={setTaskList} />
          <h1 className='font-bold text-3xl text-[#61dafb] my-8'>Suas tarefas</h1>
          <TaskList taskList={taskList} deleteTask={deleteTask} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
