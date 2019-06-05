import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';



 
function Calculate_IMT(weight, height, age, gender){
    if (isNaN(weight) || isNaN(height)|| isNaN(age) )  return "Здесь будет ваше количество каллорий"
    else return 10*weight + 6.25*height - 5* age + gender;
}

class BasicCallor extends React.Component {
  
  constructor() {
    super();
    this.state = { weight: '', height: '', age: '', radio: '-161'};
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
                           Введите необходимые данные, каллории посчитаются автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Калькулятор каллорий" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                             <div style={{paddingLeft: 12, color: 'gray' }} onChange={this.onRadiochange}>
                             Ваш пол:
                              <Radio name="radio" value="-161"  checked={this.state.radio === "-161"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="radio" value="5" checked={this.state.radio === "5"} onChange={this.handleChange}>Мужчина</Radio>
                            </div>
                            <Input type="text" placeholder="Ваш Возраст" name = "age" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Вес в кг" name = "weight" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            
                            {Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age), parseInt(this.state.radio))}
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