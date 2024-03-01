import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../color';

//데이터 리스트
const datas=[
    {
        "Title":"Black T Shirts",
        "Price":12000,
        "Color":"Black",
    },
    {
        "Title":"White T Shirts",
        "Price":12000,
        "Color":"White",
    },
    {
        "Title":"Grey T Shirts",
        "Price":16000,
        "Color":"Grey",
    },
    {
        "Title":"Black Pants",
        "Price":12000,
        "Color":"Black",
    },
    {
        "Title":"Grey jeans",
        "Price":32000,
        "Color":"Grey",
    },
    {
        "Title":"white hoodie",
        "Price":23000,
        "Color":"White",
    },
]

function All(){
    const buy=()=>{
        Alert.alert("구매 완료!")
    }

    const cart=()=>{
        Alert.alert("장바구니에 담겼습니다!")
    }
    return(
        <ScrollView>
            {datas.map((data,index)=>
                <View style={styles.itemContainer}>
                    <View style={styles.itemImage}>
                    </View>
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitleText}>{data.Title}</Text>
                        <Text style={styles.itemPriceText}>￦{data.Price.toLocaleString()}</Text>
                        <Text style={styles.itemColorText}>{data.Color}</Text>
                        <View style={styles.itemButtonContainer}>
                            <TouchableOpacity style={styles.cartBtn} onPress={()=>cart()}>
                               <Text style={styles.cartBtnText}>Add to Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyBtn} onPress={()=>buy()}>
                                <Text style={styles.buyBtnText}>Buy now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:"row",
        marginVertical:20,
        marginHorizontal:30
      },
      itemImage:{
        backgroundColor:theme.grey1,
        height:130,
        width:90,
      },
      itemTextContainer:{
        flexDirection:"column",
        marginLeft:20,
        marginTop:3
      },
      itemTitleText:{
        fontSize:15,
        fontWeight:"400",
        color:theme.text1,
        marginBottom:10,
      },
      itemPriceText:{
        fontSize:17,
        fontWeight:"700",
        color:theme.text2,
        marginBottom:10,
      },
      itemColorText:{
        fontSize:14,
        color:theme.text3,
        fontWeight:"200",
        marginBottom:21,
      },
      itemButtonContainer:{
        flexDirection:"row",
      },
      cartBtn:{
        backgroundColor:theme.grey1,
        alignItems:"center",
        justifyContent:"center",
        height:30,
        width:100,
        marginRight:20
      },
      buyBtn:{
        backgroundColor:theme.grey2,
        alignItems:"center",
        justifyContent:"center",
        height:30,
        width:100,
      },
      cartBtnText:{
        fontSize:12,
        color:theme.text3,
        fontWeight:"500"
      },
      buyBtnText:{
        fontSize:12,
        color:theme.text4,
        fontWeight:"500"
      },
})

export default All;