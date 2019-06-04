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

function Calculate_IMT(weight){
    if (isNaN(weight)) return "Here will be your MIT"
    else return weight*5;
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value1: ''};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value1: event.target.value});
    console.log(this.state.value1)
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
                          <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                            <Input type="text" placeholder="Ваш Рес" value={this.state.value1} onChange={this.handleChange}/>
                            <Input type="text" placeholder="Ваш Рост" value={this.state.value1} onChange={this.handleChange}/>
                            <Div>
                            {Calculate_IMT(parseInt(this.state.value1))}
                            </Div>
               
                          </FormLayoutGroup>
                        </FormLayout>
                        
                 
                 
            //                         
            <img src={logo} alt="Logo" style={{width: 350,  heigh: 350, opacity: 0.1}} /> 
                        </Group>
                    </Panel>
                </View>
                );
    }
}

export default App;