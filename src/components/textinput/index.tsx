import React from 'react';

interface OwnProps {
  title: string
  inputValue: string
  onChangeValue: Function
}

type Props = OwnProps

export const TextInput: React.FC<Props> = props => {
  return (
    <div className="">
      <div className="text-xl text-gray-400 mb-4">
        {props.title}
      </div>
      <input 
        className="p-2 placeholder-gray-100 border bg-gray-100 rounded shadow-inner outline-none text-gray-400"
        name={ props.title } 
        type='text'
        value={ props.inputValue }
        onChange={(e) => props.onChangeValue(e.target.value)}>
      </input>
    </div>
  )
}
