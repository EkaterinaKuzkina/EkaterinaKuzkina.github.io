import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Div, Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

//import ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
//import Papa from 'papaparse'
//import csv from 'csv';

import Home from './panels/Home';
import Persik from './panels/Persik';

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

//function myFunction() {
//    var data = Papa.parse('kozerog.csv',
//               {delimiter:',', dynamicTyping:true, skipEmptyLines:true
//               });
//    console.log(data)
//}
//
//myFunction()

//var reader = new FileReader();
//var fileToRead = 'data.csv';
//
//// attach event, that will be fired, when read is end
//reader.addEventListener("loadend", function() {
//                        // reader.result contains the contents of blob as a typed array
//                        // we insert content of file in DOM here
//                        document.getElementById('file').innerText = reader.result;
//                        });
//
//// start reading a loaded file
//
//
//reader.readAsText(fileToRead);


//

//var CSVToArray = function ( strData, strDelimiter ){
//    
//    strDelimiter = (strDelimiter || ",");
//    
//    var objPattern = new RegExp(
//                                (
//                                 "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
//                                 "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
//                                 "([^\"\\" + strDelimiter + "\\r\\n]*))"
//                                 ),
//                                "gi"
//                                );
//    
//    var arrData = [[]];
//    var arrMatches = null;
//    
//    while (arrMatches = objPattern.exec( strData )){
//        var strMatchedDelimiter = arrMatches[ 1 ];
//        if (
//            strMatchedDelimiter.length &&
//            strMatchedDelimiter !== strDelimiter
//            ){
//            arrData.push( [] );
//        }
//        var strMatchedValue;
//        if (arrMatches[ 2 ]){
//            strMatchedValue = arrMatches[ 2 ].replace(
//                                                      new RegExp( "\"\"", "g" ),
//                                                      "\""
//                                                      );
//        } else {
//            strMatchedValue = arrMatches[ 3 ];
//        }
//        arrData[ arrData.length - 1 ].push( strMatchedValue );
//    }
//    console.log(arrData)
//    return( arrData );
//}
//
//var data ="data,csv,dhff,jggjf";
//CSVToArray(data, ",");
//var data_parse = Papa.parse(data);
//console.log(data_parse)

//Papa.parse("/Users/ekaterinakuzkina/Desktop/data_download/oven.csv", {
//           download: true,
//           step: function(row) {
//           console.log("Row:", row.data);
//           },
//           complete: function() {
//           console.log("All done!");
//           }
//           });

//import { csv } from 'd3-fetch';
////import url from '/Users/ekaterinakuzkina/Desktop/data_download/oven.csv';
//
//csv("data.csv").then(function(data) {
//      console.log(data); // [{"Hello": "world"}, …]
//      });

//var txt = '';
//var xmlhttp = new XMLHttpRequest();
//xmlhttp.onreadystatechange = function(){
//    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
//        txt = xmlhttp.responseText;
//    }
//};
//xmlhttp.open("GET","new.txt",true);
//console.log(xmlhttp.send());

var fs = require('fs');
var textByLine = fs.readFileSync('dancers.txt').toString().split("\n");


class App extends React.Component {
    
    render() {
        return (
                <View activePanel="mainPanel">
                    <Panel id="mainPanel">
                        <PanelHeader>Example</PanelHeader>
                        <Group>
                        <Div>
                            Hello World
                        </Div>
                        </Group>
                    </Panel>
                </View>
                );
    }
}

export default App;