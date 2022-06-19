import { parse } from 'node:path/win32';
import React, { useState } from 'react'
import { FormGroup } from './FormGroup'

type Props = {}

const TaskForm = (props: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {
    
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name == 'title') {
      setTitle(e.target.value) 
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form>
        <FormGroup onChange={onChangeHandler} name='title' label='Título' />
        <FormGroup onChange={onChangeHandler} name='difficulty' label='Dificuldade' class='mt-8'/>
        <button className='bg-[#282c34] font-bold text-[#61dafb] w-full mt-5 p-2 transition duration-75 hover:bg-[#61dafb] hover:text-white ease-linear' type='submit'>Nova Tarefa</button>
    </form>
  )
}

export default TaskForm