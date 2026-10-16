import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.HeadingText} >ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>1</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>2</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>3</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>4</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>5</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>6</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>19</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText :{
        fontSize : 30,
    },
    container :{
        padding : 7
    }
    ,
    Card : {
        justifyContent : 'center',
        alignItems : 'center',
        width : 100,
        height : 100,
        borderRadius: 4,
        padding : 3,
        margin : 8 
    },
    CardElevated :{
        backgroundColor: 'gray',
        elevation : 6,
        shadowOffset : {
            width : 3,
            height :3,
        },
        shadowColor : 'red',
        shadowOpacity : 4,
        shadowRadius :8
    }
})