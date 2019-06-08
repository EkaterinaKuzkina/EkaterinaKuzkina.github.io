import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT(weight, height){
    if (isNaN(weight) || isNaN(height) )  return "Здесь будет ваш идеальный вес"
    else {
      var callor;
      var coef1;
      var coef2;
      if (height<155) coef1 = 95;
      else if (height<175) coef1 = 100;
      else coef1 = 110;

      if (weight<15) coef2 = 0.9;
      else if (height<17) coef2 = 1;
      else coef2 = 1.1;

      callor = (height - coef1)*coef2;
    }
    return Math.round(callor);
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
      var callorii = Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height))
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, идеальный вес посчитается автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Расчет идеального веса по индексу Брока с учетом комплекци" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                     
                            <Input type="text" placeholder="Обхват запястья" name = "weight" onChange={this.handleChange}/>
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