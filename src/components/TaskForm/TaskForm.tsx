import React, { useState } from 'react'
import { ITask } from '../../interfaces/Task';
import { FormGroup } from './FormGroup'

type Props = {
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(id + 1);

    setTaskList(oldList => [...oldList, { id, title, difficulty }]);
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler}>
      <FormGroup onChange={onChangeHandler} name='title' label='Título' type='text'/>
      <FormGroup onChange={onChangeHandler} name='difficulty' label='Dificuldade' class='mt-8' type='number'/>
      <button className='bg-[#282c34] font-bold text-[#61dafb] w-full mt-5 p-2 transition duration-75 hover:bg-[#61dafb] hover:text-white ease-linear' type='submit'>Nova Tarefa</button>
    </form>
  )
}

export default TaskForm