/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import Elem from './component/Elem.js';
import Header from './component/Header.js';
/*import global from './global/Global.js';*/
import Provider from './global/Test';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import "./global/Global"


const App = () => {
  const [display, setDisplay] = useState(0);
  return (
    <Provider>
      <SafeAreaView>
        {/*<Header text='To do list' dataValue={() => setDisplay(display+1)}/>*/}
        <Header text='To do list' setDataValue={setDisplay}/>
        <View>
          <Elem text="Debug la preprod"/>
          <Elem text="Avancer la Todolist"/>
          <Elem text="Cacahuète dans le minibar"/>
          <Elem text="Chocapic"/>
          <Elem text="Gpud'id"/>
          <Elem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor felis, suscipit non mauris nec, tempus pretium nulla. Morbi sapien arcu, ullamcorper id mattis nec, pellentesque vel erat. Proin vitae justo pharetra mi vehicula scelerisque vitae quis libero. Aliquam varius lacus mauris, ut convallis ante tempus quis. Duis egestas diam sit amet facilisis porta. Fusce rutrum euismod enim, sit amet faucibus enim sodales eget. Aliquam eget pharetra arcu. Cras massa metus, lobortis quis libero vitae, tincidunt maximus nunc. Proin quis mi vestibulum, fermentum risus eget, dictum odio. Nam eu dui massa. Etiam pretium nec ligula tincidunt ornare. Etiam feugiat lacus a tristique rhoncus. "/>
          <Elem text="Trouver de nouveaux éléments à ajouter à la Todolist prochainement"/>
          <Text>
            display {display} darktheme value {global.darkTheme}
          </Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
