import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Div, Group, Panel, PanelHeader, View, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import * as d3 from "d3";
import Home from './panels/Home';
import Persik from './panels/Persik';

import logo from './img/taurus.png';
import Papa from 'papaparse'
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';




// import { Text, ImageBackground, StyleSheet, Image } from 'react-native';

//class App extends React.Component {
//	constructor(props) {
//		super(props);
//
//		this.state = {
//			activePanel: 'home',
//			fetchedUser: null,
//		};
//	}
//
//	componentDidMount() {
//		connect.subscribe((e) => {
//			switch (e.detail.type) {
//				case 'VKWebAppGetUserInfoResult':
//					this.setState({ fetchedUser: e.detail.data });
//					break;
//				default:
//					console.log(e.detail.type);
//			}
//		});
//		connect.send('VKWebAppGetUserInfo', {});
//	}
//
//	go = (e) => {
//		this.setState({ activePanel: e.currentTarget.dataset.to })
//	};
//
//	render() {
//		return (
//			<View activePanel={this.state.activePanel}>
//                <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
//				<Persik id="persik" go={this.go} />
//               
//			</View>
//            
//		);
//    }
//	
//}
//

//export default App;




function  Print_1(value){
    console.log(value)
}
 
function Calculate_IMT(weight, height, age){
    if (isNaN(weight) || isNaN(height)|| isNaN(age) )  return "Здесь будет ваше количество каллорий"
    else return 10*weight + 6.25*height - 5* age + 5;
}

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {weight: '', height: '', age: ''};
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
                            <Button size="xl" level="secondary">Get Your predskazanie</Button>
                        </Div>
                        <Div>
                           You personal Horosckope, Dear Deva for today
                         </Div>
                        <Div>
                            {Print_1()}
                        </Div>
                        <FormLayout>
                          <FormLayoutGroup top="Калькулятор каллорий" bottom="Поля вес, рост и возраст могут содержать только цифры.">
                            <Input type="text" placeholder="Ваш Возраст" name = "age" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Вес в кг" name = "weight" onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост в см" name = "height" onChange={this.handleChange}/>
                            <Div>
                            {Calculate_IMT(parseInt(this.state.weight), parseInt(this.state.height), parseInt(this.state.age))}
                            </Div>
               
                          </FormLayoutGroup>
                        </FormLayout>
                      </Group>
                    </Panel>
                </View>
                );
    }
}

export default App;