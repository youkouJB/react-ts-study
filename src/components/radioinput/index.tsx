import React from 'react'

interface OwnProps {
  title: string
  selectedValue: string
  onChangeValue: Function
}

type Props = OwnProps;
export const RadioInput : React.FC<Props> = props => {
  return(
    <>
      <div className=" text-xl my-4">
        {props.title}
      </div>
      <div className="tabs">
        <input type='radio' id='one' name='radio-group' value='radio1' onChange={(e) => props.onChangeValue(e.target.value)}/>
        <label className="tab_item" htmlFor="one">１</label>
        <input type='radio' id='two' name='radio-group' value='radio2' onChange={(e) => props.onChangeValue(e.target.value)}/>
        <label className="tab_item" htmlFor="two">２</label>
        <input type='radio' id='three' name='radio-group' value='radio3' onChange={(e) => props.onChangeValue(e.target.value)}/>
        <label className="tab_item" htmlFor="three">３</label>
      </div>
    </>
  )
}
