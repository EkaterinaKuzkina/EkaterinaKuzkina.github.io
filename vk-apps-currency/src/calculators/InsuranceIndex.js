import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT( height, age){
    if (isNaN(height)|| isNaN(age)  )  return "Здесь будет ваш идеальный вес"
    else {
      var callor;
      

      callor =  50+0.75*(height - 150) + (age-20)/4;
    }
    if (callor<=0) return "Возраст от 25 до 59"
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
      var callorii = Calculate_IMT( parseInt(this.state.height), parseInt(this.state.age))
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, идеальный вес посчитается автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Расчет идеального веса по индексу Страховой компании Metropolitan Life, который определяет вес для человека, с наименьшими рисками для здоровья. Подходит для людей старше 25 лет и младше 59" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                          
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш возраст" name = "age" onChange={this.handleChange}/>
                            
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