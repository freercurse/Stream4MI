/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from 'react-native-windows';

function App(): React.JSX.Element {  

  const [isButtonActive, setIsButtonActive] = React.useState(false);
  
  return (
    <SafeAreaView>
      <View style={styles.floatingButton} >
        <Button  title={isButtonActive ? '🏠' : '🔧'} onPress={() => setIsButtonActive(!isButtonActive)} />
      </View>

      {isButtonActive && (
        <View >
          <Text>This is your Dashboard</Text>
        </View>
      ) ||
      <View>
        <Text>This is your Settings</Text>
      </View>
      }

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  floatingButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 50,
    height: 35,
    borderRadius: 14,    
    backgroundColor: 'blue',
  },
});

export default App;
