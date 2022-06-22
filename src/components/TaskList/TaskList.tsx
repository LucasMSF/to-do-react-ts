import React from 'react'
import { ITask } from '../../interfaces/Task'
import "bootstrap-icons/font/bootstrap-icons.css"

type Props = {
  taskList: ITask[],
  deleteTask: (id: number) => void,
  // handleEditTask: (task: ITask) => void,
}



const TaskList = (props: Props) => {
  const handleDeleteTask = (id: number) => {
    props.deleteTask(id)
  }

  return (
    <>
      {props.taskList.length > 0 ?
          <div className="flex flex-col w-full mb-5">
            {props.taskList.map((task) => (
              <div className='flex justify-between shadow-lg p-5 mt-5 bg-[#282c34] text-white'>
                <div>
                  <h1 className='font-bold text-lg'>{task.title}</h1>
                  <p>Dificuldade: {task.difficulty}</p>
                </div>
                <div className='flex flex-col text-2xl text-center'>
                  <i className="transition duration-150 cursor-pointer bi bi-pencil bg-[#61dafb] p-2 w-12 hover:text-[#282c34]"></i>
                  <i className="transition duration-150 cursor-pointer bi bi-trash bg-[#61dafb] p-2 w-12 mt-2 hover:text-[#282c34]" onClick={() => handleDeleteTask(task.id)}></i>
                </div>
              </div>
            ))}
          </div>
        : <h1 className='font-bold text-3xl text-[#282c34] text-center mb-5'>Não há tarefas</h1>
      }
    </>
  )
}

export default TaskList