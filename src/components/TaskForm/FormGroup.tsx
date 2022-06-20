import React from 'react'

type Props = {
    name: string,
    label: string,
    type: string,
    class?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormGroup = (props: Props) => {
    return (
        <div className={`flex flex-col ${props.class}`}>
            <label className='font-bold text-[#282c34]' htmlFor={props.name}>{props.label}</label>
            <input onChange={props.onChange} className='w-[350px] h-[25px] p-5 border-2 border-[#282c34] focus:outline-none' type={props.type} name={props.name}  placeholder={props.label}/>
        </div>
    )
}