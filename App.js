import * as React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Details from './pages/Details';
import { theme } from './color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './pages/CustomHeaderButton';
import HeadNavigator from './navigator/HeadNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen 
    //       name="Home" 
    //       component={Home} 
    //       options={{ 
    //         // title: 'Ssggrr Market', 
    //         // fontSize:20,
    //         // headerTintColor: theme.text1,
    //         // headerTitleStyle:{
    //         //   fontSize:20, 
    //         //   fontWeight:"500"}, 
    //         headerTitle: (...props) => (
    //           <View>
    //             <Text style={styles.headerText}>Ssggrr Market</Text>
    //           </View>
    //         ),
    //         headerRight: () => (
    //             //<Button title="cart"></Button>
    //             <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //               <Item
    //                 title='Cart'
    //                 iconName="shopping-outline"
    //                 ></Item>
    //             </HeaderButtons>
    //         )
    //       }}/>
    //     <Stack.Screen name="Details" component={Details} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HeadNavigator/>    
  );
}

// const styles = StyleSheet.create({
//   headerText:{
//     fontSize:20,
//     fontWeight:"500",
//     color:theme.text1,
//   }
// })