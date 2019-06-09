import React from 'react';
import { Div, Group, Panel, PanelHeader, View, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';


function CheckNan(val){
  if (!isNaN(val)) return Math.round(val); 
  else return ''
}
 
function Calculate_IMT(weight, height, age, gender, active, wanted_result){
    if (isNaN(weight) || isNaN(height)|| isNaN(age) )  return "Каллории"
    else {
      var callor;
      if (gender === 'female'){
        callor = 4.35*weight*2.20462 + 4.7*height*0.393701 - 4.7* age + 655;
      }
      else callor = 6.23*weight*2.20462 + 12.7*height*0.393701 - 6.8* age + 66;
    }
    if (wanted_result == 'lose'){
    return Math.round(callor*active - 500);
    }
    if (wanted_result == 'stable'){
    return Math.round(callor*active);
    }
    if (wanted_result == 'increase'){
    return Math.round(callor*active + callor*0.15);
    }
}

function SetBJU(wanted_result){
  var bju = new Object();
  if (wanted_result === 'lose'){
    bju['b'] = 60;
    bju['j'] = 20;
    bju['u'] = 10;
  }
  if (wanted_result === 'stable'){
    bju['b'] = 15;
    bju['j'] = 20;
    bju['u'] = 65;
  }
  if (wanted_result === 'increase'){
    bju['b'] = 60;
    bju['j'] = 35;
    bju['u'] = 15;
  }
  return bju;
}

 
function Calculate_Water(weight, gender){
    if (isNaN(weight)  )  return " "
    else {
      var water;
      
    if (gender === 'female'){ 
      water =  weight*31 / 1000;
    }
    else water =  weight*35 / 1000;
    }
    return Number((water).toFixed(1));
}


function Calculate_WaterInBody(weight, height, age, gender){
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

function Calculate_PerfectWeight( height, gender){
    if (isNaN(height)  )  return " "
    else {
      var callor;
      
    if (gender === 'female'){ 
      callor =  53.1 + 1.36*(height*0.393701-60) -9;
    }
    else callor =  56.2 + 1.41*(height*0.393701-60);
    }
    if (callor<=0) return " "
    else return Math.round(callor);
}

function Calculate_Fat(age, BMI, gender){
if (isNaN(age)  )  return " "
    else {
  var fat;
      
    if (gender === 'female'){ 
      fat =  1.20 *BMI + 0.23*age - 5.4;
    }
    else fat =  1.20 *BMI + 0.23*age - 10.8 - 5.4;
    }
     if (fat<=0) return " "
    else return Math.round(fat);
}


class Harrison extends React.Component {
  
  constructor() {
    super();
    this.state = { weight: '', height: '', age: '', gender: 'female', radio_active: '1.2',  wanted_result: 'lose'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
   this.setState({ [evt.target.name]: evt.target.value });
  }  
 

    render() {
      var callorii = Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age), this.state.gender, parseFloat(this.state.radio_active),this.state.wanted_result )
      var water_inBody = Calculate_WaterInBody(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age), this.state.gender)
      var BMI = Number((this.state.weight/(this.state.height/100*this.state.height/100)).toFixed(1))
      var Reccomendations = new Object();
      Reccomendations[0] = 'Бег по лестнице вверх (10 мин = 237 Ккал)';
      Reccomendations[1] = 'Уборка (10 мин = 67 Ккал)';
      Reccomendations[2] = 'Быстрая ходьба (7 км/час) (10 мин = 67 Ккал)';
      Reccomendations[3] = 'Езда на велосипеде (8-16)км/час (10 мин = 68 Ккал)';
      Reccomendations[4] = 'Прыжки через скакалку (10 мин = 70 Ккал)';
      Reccomendations[5] = 'Энергичные танцы (10 мин = 90 Ккал)';
      Reccomendations[6] = 'Хайкинг (10 мин = 85 Ккал)';
      Reccomendations[7] = 'Катание на роликах/коньках/лыжах (10 мин = 95 Ккал)';
      Reccomendations[8] = 'Гимнастика/Йога/Растяжка (10 мин = 90 Ккал)';
      Reccomendations[9] = 'Бадминтон/Баскетбол/Волейбол (10 мин = 65 Ккал)';
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
                              <Radio name="gender" value="female"  checked={this.state.gender === "female"} onChange={this.handleChange} >Женщина</Radio>
                              <Radio name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}>Мужчина</Radio>
                              Уровень активности:
                              <Radio name="radio_active" value="1.2"  checked={this.state.radio_active === "1.2"} onChange={this.handleChange} >Сидячий</Radio>
                              <Radio name="radio_active" value="1.375" checked={this.state.radio_active === "1.375"} onChange={this.handleChange}>Слегка активный</Radio>
                              <Radio name="radio_active" value="1.55"  checked={this.state.radio_active === "1.55"} onChange={this.handleChange} >Умеренно активный</Radio>
                              <Radio name="radio_active" value="1.725"  checked={this.state.radio_active === "1.725"} onChange={this.handleChange} >Очень активный</Radio>
                              Желаемый результат:
                              <Radio name="wanted_result" value="lose"  checked={this.state.wanted_result === "lose"} onChange={this.handleChange} >Похудение</Radio>
                              <Radio name="wanted_result" value="stable" checked={this.state.wanted_result === "stable"} onChange={this.handleChange}>Поддержание</Radio>
                              <Radio name="wanted_result" value="increase"  checked={this.state.wanted_result === "increase"} onChange={this.handleChange} >Набор</Radio>
                          </div>
                            <Input type="text" placeholder="Ваш Возраст" name = "age" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Вес в кг" name = "weight" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            
                            <Div>
                            <Header>
                            Состоянние тела:
                             </Header> 
                            
                             <Header level="2">
                            Индекс массы тела: {CheckNan(BMI)}
                             </Header>
                             <Header level="2">
                            Вода в ораганизме: {CheckNan(water_inBody*100/this.state.weight)} % 
                            </Header>
                            <Header level="2">
                            Жир в организме: {CheckNan(Calculate_Fat(this.state.age, BMI, this.state.gender))}  %  
                            </Header>
                            <Header level="2">
                            Сухая масса тела: {CheckNan(100- Calculate_Fat(this.state.age, BMI, this.state.gender) - CheckNan(water_inBody*100/this.state.weight))} % 
                            </Header>
                            <Header level="2">
                            Идеальный вес: {Calculate_PerfectWeight(this.state.height, this.state.gender)} кг
                            </Header>
                           
                            <Header>
                            Приемы пищи и активность (рекоммендации):
                             </Header> 
                             <Header level="2">
                            Количество калорий на день: {callorii} 
                            </Header>
                            <Header level="2">
                            Белков ({SetBJU(this.state.wanted_result)['b']}%): {CheckNan(callorii*0.35/4)} г
                            </Header>
                            <Header level="2">
                            Жиров ({SetBJU(this.state.wanted_result)['j']}%): {CheckNan(callorii*0.4/9)} г
                            </Header>
                            <Header level="2">
                            Углеводов ({SetBJU(this.state.wanted_result)['u']}%): {CheckNan(callorii*0.25/4)} г
                            </Header>
                            <Header level="2">
                            Потребление воды в день: {Calculate_Water(this.state.weight, this.state.gender)} л
                            </Header>
                            <Header level="2">
                             Рекоммендованная активность: {Reccomendations[Math.floor(Math.random() * 9)]}
                             </Header>
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