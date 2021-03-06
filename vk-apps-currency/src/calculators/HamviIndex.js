import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT( height, gender){
    if (isNaN(height)  )  return "Здесь будет ваш идеальный вес"
    else {
      var callor;
      
    if (gender === 'female'){ 
      callor =  45.5 + 2.2*(height*0.393701-60);
    }
    else callor =  48 + 2.7*(height*0.393701-60);
    }
    if (callor<=0) return "Возраст от 18, рост от 140 см"
    else return Math.round(callor);
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
      var callorii = Calculate_IMT( parseInt(this.state.height), this.state.radio)
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
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            
                            <Div>
                            Ваш идеальный вес: {callorii}  <br/>
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