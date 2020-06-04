import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './src/hooks/useCachedResources';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';

// Screens
import SearchScreen from "./src/screens/SearchScreen"
import ResultShowScreen from "./src/screens/ResultShowScreen"

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer initialRouteName="Home" linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={SearchScreen} />
            <Stack.Screen name="Home-Details" component={ResultShowScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
