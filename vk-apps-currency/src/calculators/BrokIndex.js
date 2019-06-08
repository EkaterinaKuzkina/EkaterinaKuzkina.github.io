import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';



 
function Calculate_IMT(height, gender){
    if ( isNaN(height) )  return "Здесь будет ваш идеальный вес"
    else return Math.round((height-100)*gender);
}

class BasicCallor extends React.Component {
  
  constructor() {
    super();
    this.state = {height: '', radio: '0.85'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
   this.setState({ [evt.target.name]: evt.target.value });
  }  
 

    render() {
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, идеальный вес посчитается автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Калькулятор идеального веса" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                             <div style={{paddingLeft: 12, color: 'gray' }} onChange={this.onRadiochange}>
                             Ваш пол:
                              <Radio name="radio" value="0.85"  checked={this.state.radio === "0.85"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="radio" value="0.9" checked={this.state.radio === "0.9"} onChange={this.handleChange}>Мужчина</Radio>
                            </div>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            
                            {Calculate_IMT( parseInt(this.state.height), parseFloat(this.state.radio))}
                            </Div>
               
                          </FormLayoutGroup>
                        </FormLayout>
                      </Group>
                    </Panel>
                </View>
                );
    }
}

export default BasicCallor;