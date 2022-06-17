import React from 'react'
import { FormGroup } from './FormGroup'

type Props = {}

const TaskForm = (props: Props) => {
  return (
    <form>
        <FormGroup name='title' label='Título' />
        <FormGroup name='difficulty' label='Dificuldade' class='mt-8'/>
        <button className='bg-[#282c34] font-bold text-[#61dafb] w-full mt-5 p-2 transition duration-75 hover:bg-[#61dafb] hover:text-white ease-linear' type='submit'>Nova Tarefa</button>
    </form>
  )
}

export default TaskForm