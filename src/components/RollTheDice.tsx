import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, ImageSourcePropType } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import DiceOne from '@/assets/one.png'
import DiceTwo from '@/assets/two.png'
import DiceThree from '@/assets/three.png'
import DiceFour from '@/assets/four.png'
import DiceFive from '@/assets/five.png'
import DiceSix from '@/assets/six.png'

export function RollTheDice() {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDice = () => {
    let RandomNumber = Math.floor(Math.random() * 6) + 1;
    switch (RandomNumber) {
        case 1: setDiceImg(DiceOne); break;
        case 2: setDiceImg(DiceTwo); break;
        case 3: setDiceImg(DiceThree); break;
        case 4: setDiceImg(DiceFour); break;
        case 5: setDiceImg(DiceFive); break;
        case 6: setDiceImg(DiceSix); break;
        default: setDiceImg(DiceOne); break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.HeadingText}>Roll The Dice</Text> 
      <View style={styles.diceContainer}>
        <Image style={styles.DiceImg} source={diceImg} />
      </View>

      <Pressable style={styles.rollButton} onPress={rollTheDice}>
        <Text style={styles.buttonText}>ROLL DICE</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20 
    },
    HeadingText: {
        fontSize: 29,
        fontWeight: "bold",
        textAlign: "center",
        color: "navy",
        marginBottom: 40,  
             
    },
    diceContainer: {
        marginVertical: 20,
    },
    DiceImg: {
        width: 150,
        height: 150,
    },
    rollButton: { 
        marginTop: 40,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: 'navy',
        borderRadius: 8,
    },
    buttonText: {
        color: 'navy',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
