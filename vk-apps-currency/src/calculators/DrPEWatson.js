import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT(weight, height, age, gender, ){
    if (isNaN(weight) || isNaN(height)|| isNaN(age) )  return ""
    else {
      var callor;
      if (gender === 'female'){
        callor = -2.097+ 0.2466*weight + 0.1069*height;
      }
      else callor = 2.447 + 0.3362*weight + 0.1074*height - 0.09156* age;
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
      var callorii = Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age), this.state.radio)
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, количество воды вашем организме посчитается автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Расчет количества воды в теле по формуле доктора P.E. Watson" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                             <div style={{paddingLeft: 12, color: 'gray' }}>
                             Ваш пол:
                              <Radio name="radio" value="female"  checked={this.state.radio === "female"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="radio" value="male" checked={this.state.radio === "male"} onChange={this.handleChange}>Мужчина</Radio>
                             </div>

                            <Input type="text" placeholder="Ваш Возраст" name = "age" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Вес в кг" name = "weight" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            Вода в теле (л): {callorii}  л<br/>
                            Вода в теле (%) : {CheckNan(callorii*100/this.state.weight)} %<br/>
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