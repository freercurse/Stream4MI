import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-windows';

import Home from './screens/Home';
 import Preferences from './screens/Preferences'

function App(): React.JSX.Element {   

  const [tab, setTab] = React.useState(1);
    
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={[styles.floatingButton, {top:10, left:16}]} >
        <Button  title={'🏠'} onPress={() => setTab(1)} />
      </View>
      <View style={[styles.floatingButton, {top:60, left:16}]} >
        <Button  title={'🔧'} onPress={() => setTab(2)} />
      </View>

      {tab == 1 &&        
        <Home/>             
      || tab == 2 &&       
        <Preferences/>     
      }      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 15,
    color: 'white',  
    height: '100%',      
  },
  floatingButton: {
    position: 'absolute',    
    width: 50,
    height: 35,
    borderRadius: 14,    
    backgroundColor: 'blue',
  },  
});

export default App;
