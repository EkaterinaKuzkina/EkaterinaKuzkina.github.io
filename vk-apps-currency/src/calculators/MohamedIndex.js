import React from 'react';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';



 
function Calculate_IMT(height){
    if ( isNaN(height) )  return "Здесь будет ваш идеальный вес"
    else return Math.round((height*height*0.00225));
}

class BasicCallor extends React.Component {
  
  constructor() {
    super();
    this.state = {height: ''};
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
                          <FormLayoutGroup top="Калькулятор идеального веса по индексу Моххамеда" bottom="Поле рост может содержать только цифры.">
                 
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            
                            {Calculate_IMT( parseInt(this.state.height))}
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