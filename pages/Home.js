import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../color';
import All from "./All";
import Board from "./Board";
//import Details from './Details';


function Home({ navigation }) {
  const [all, setAll]=useState(true);
  const [board, setBoard]=useState(false);

  const allTF=()=>{
    setAll(true);
    setBoard(false);
  }
  const boardTF=()=>{
    setAll(false);
    setBoard(true);
  }

  return (
    <View style={styles.home}>
      <View style={styles.allBoard}>
        <TouchableOpacity onPress={allTF} style={styles.allView}>
          <Text style={{...styles.abText, color:all?theme.text1:theme.text3}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={boardTF} style={styles.boardView}>
          <Text style={{...styles.abText, color:all?theme.text3:theme.text1}}>Board</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {all?<All/>:<Board/>}
      </ScrollView>       
    </View>
  );
}

const styles=StyleSheet.create({
    home:{
        flex: 1, 
        //alignItems: 'center', 
        backgroundColor:theme.bg,
    },
    allBoard:{
      backgroundColor: theme.grey1,
      flexDirection:"row",
      //justifyContent:"space-between",
      marginTop:10,
      marginBottom:10,
      paddingVertical:14
    },
    allView:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    boardView:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    abText:{
      fontSize:17,
      fontWeight:"600",
    },
})


export default Home;