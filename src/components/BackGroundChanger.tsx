import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

export default function BgChanger() {
  const [randomBg, setRandomBg] = useState('#FFFFFF');

  const generateColor = () => {
    const range = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += range[Math.floor(Math.random() * 16)];
    }
    setRandomBg(color);
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" />

      {/* Background applied here */}
      <View style={[styles.container, { backgroundColor: randomBg }]}>
        <Text style={styles.headingText}>Background Changer</Text>

        <TouchableOpacity onPress={generateColor} style={styles.actionBtn}>
          <Text style={styles.btnText}>Press me</Text>
        </TouchableOpacity>
 
        {/* Optional: show current hex */}
        <Text style={styles.hexText}>{randomBg}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // center vertically
    padding: 16,
  },
  headingText: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginBottom: 4,
  },
  actionBtn: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 22,
    alignItems: 'center',
  },
  btnText: {
    color: 'red',
    fontWeight: 'bold',
  },
  hexText: {
    marginTop: 16,
    fontSize: 14,
    color: '#333',
  },
});