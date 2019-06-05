import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT(weight, height, age, gender, active){
    if (isNaN(weight) || isNaN(height)|| isNaN(age) )  return "Каллории"
    else {
      var callor;
      if (gender === 'female'){
        callor = 4.35*weight*2.20462 + 4.7*height*0.393701 - 4.7* age + 655;
      }
      else callor = 6.23*weight*2.20462 + 12.7*height*0.393701 - 6.8* age + 66;
    }
    return Math.round(callor*active - 500);
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
      var callorii = Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age), this.state.radio, parseFloat(this.state.radio_active))
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group >
             
                        <Div>
                           Введите необходимые данные, каллории посчитаются автоматически:)
                         </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Расчет каллорий по формуле ХАРРИСА БЕНЕДИКТА для сушки тела" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                             <div style={{paddingLeft: 12, color: 'gray' }}>
                             Ваш пол:
                              <Radio name="radio" value="female"  checked={this.state.radio === "female"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="radio" value="male" checked={this.state.radio === "male"} onChange={this.handleChange}>Мужчина</Radio>
                              Уровень активности:
                              <Radio name="radio_active" value="1.2"  checked={this.state.radio_active === "1.2"} onChange={this.handleChange} >Сидячий</Radio>
                              <Radio name="radio_active" value="1.375" checked={this.state.radio_active === "1.375"} onChange={this.handleChange}>Слегка активный</Radio>
                              <Radio name="radio_active" value="1.55"  checked={this.state.radio_active === "1.55"} onChange={this.handleChange} >Умеренно активный</Radio>
                              <Radio name="radio_active" value="1.725"  checked={this.state.radio_active === "1.725"} onChange={this.handleChange} >Очень активный</Radio>
                            </div>

                            <Input type="text" placeholder="Ваш Возраст" name = "age" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Вес в кг" name = "weight" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            Количество каллирой на день: {callorii}  <br/>
                            Белков (35%): {CheckNan(callorii*0.35/4)} <br/>
                            Жиров (40%): {CheckNan(callorii*0.4/9)}<br/>
                            Углеводов (25%):{CheckNan(callorii*0.25/4)} <br/>
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