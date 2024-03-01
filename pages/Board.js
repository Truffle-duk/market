import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../color';

// 데이터리스트
const datas=[
    {
        "type":"Top",
        "num":6,
        "itemImage":[0,0,0,0,0,0]
    },
    {
        "type":"Bottom",
        "num":8,
        "itemImage":[0,0,0,0,0,0,0,0]
    },
    {
        "type":"Shoes",
        "num":5,
        "itemImage":[0,0,0,0,0]
    },
    {
        "type":"Accessory",
        "num":12,
        "itemImage":[0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        "type":"Outerwear",
        "num":6,
        "itemImage":[0,0,0,0,0,0]
    }
]


function Board(){

    return(
        <ScrollView>
            {datas.length===0?(
                <View>
                    <Text>Null</Text>
                </View>
            ):(
                datas.map((data,index)=>
                <View>
                    <View style={styles.boardItemContainer}>
                        <View style={styles.itemTypeContainer}>
                            <Text style={styles.itemTypeText}>{data.type}</Text>
                            <Text style={styles.itemNumberText}>{data.num} Items</Text>
                        </View>
                        <ScrollView horizontal>
                            {data.itemImage.map((num, index)=>
                            <View style={styles.itemImage}></View>
                            )}
                        </ScrollView>                        
                    </View>
                    <View style={styles.line}></View>
                </View>
                                        
                )
            )}
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    boardItemContainer:{
        marginHorizontal:30,
        marginTop:20,
        marginBottom:30,
    },
    itemTypeContainer:{
        flexDirection:"row",
        marginBottom:25,
    },
    itemTypeText:{
        fontSize:17,
        fontWeight:200,
        color:theme.text1,
        marginRight:15
    },
    itemNumberText:{
        fontSize:14,
        fontWeight:150,
        color:theme.text3,
    },
    itemImage:{
        backgroundColor:theme.image1,
        marginRight:17,
        width:70,
        height:70,
    },
    line:{
        flex:1,
        height:1,
        marginHorizontal:10,
        backgroundColor:theme.line,
    }
})

export default Board;