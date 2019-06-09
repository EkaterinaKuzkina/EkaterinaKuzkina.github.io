import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT( weight, gender){
    if (isNaN(weight)  )  return "Здесь будет ваша дневная норма воды в"
    else {
      var water;
      
    if (gender === 'female'){ 
      water =  weight*31 / 1000;
    }
    else water =  weight*35 / 1000;
    }
    if (water<=0) return "Ваш вес?"
    else return Number((water).toFixed(1));
}

class Harrison extends React.Component {
  
  constructor() {
    super();
    this.state = { weight: '', height: '', age: '', radio: 'female', radio_active: '1.2'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
   this.setState({ [evt.target.name]: evt.target.value });
  }  
 

    render() {
      var callorii = Calculate_IMT( parseInt(this.state.weight), this.state.radio)
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, идеальный вес посчитается автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Расчет идеального веса по индексу Хамви, который определяет вес для человека, с наименьшими рисками для здоровья. Подходит для людей старше 25 лет и младше 59" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                             <div style={{paddingLeft: 12, color: 'gray' }}>
                             Ваш пол:
                              <Radio name="radio" value="female"  checked={this.state.radio === "female"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="radio" value="male" checked={this.state.radio === "male"} onChange={this.handleChange}>Мужчина</Radio>
                             </div>
                            <Input type="text" placeholder="Ваш вес в кг" name = "weight" onChange={this.handleChange}/>
                            
                            <Div>
                            Ваша норма воды в сутки: {callorii} л<br/>
                            </Div>
                          </FormLayoutGroup>
                        </FormLayout>
                      </Group>
                    </Panel>
                </View>
                );
    }
}

export default Harrison;