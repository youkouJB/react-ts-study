import React from 'react'
import { TextInput } from '../textinput/index';
import { TopPageHandler } from '../../pages/test/index';
import { RadioInput } from '../radioinput/index';
import { ShowState } from '../showstate/index';
import { SubmitButton } from '../submitbutton/index';

interface OwnProps {
  inputValue: string
  selectedValue: string
  clickCount: number
}

type Props =  OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
  render(){
    return(
      <>
        <div className="text-center pt-32 h-screen">
          <TextInput 
            title='入力' 
            inputValue={ this.props.inputValue }
            onChangeValue={ this.props.handleOnChangeValue }
          />
          <RadioInput
            title='ラジオ'
            selectedValue={ this.props.selectedValue }
            onChangeValue={ this.props.handleOnSelectValue }
          />
          <SubmitButton
            title='Click me'
            onClick={ this.props.handleOnClick }
          />
          <ShowState
            inputValue={ this.props.inputValue }
            selectedValue={ this.props.selectedValue }
            clickCount={ this.props.clickCount }
          />
        </div>
      </>
    )
  }
}