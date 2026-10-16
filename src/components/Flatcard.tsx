import { StyleSheet, Text, View } from "react-native";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Hello I am your FlatCard!</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.card]}>
          <Text style = {styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.cardTwo, styles.card]}>
          <Text style = {styles.cardText}>Red</Text>
        </View>
        <View style={[styles.cardThree, styles.card]}>
          <Text style = {styles.cardText}>Green</Text>
        </View>
        <View style={[styles.cardFour, styles.card]}>
          <Text style = {styles.cardText}>SkyBlue</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 23,
    fontWeight: "500",
    color: "black",
    paddingHorizontal: 8,
    margin : 4,
  },

  container: {
    flex : 1,
    flexDirection : 'row',
    
  },
  card: {
    width: '20%',
    height: 100,
    borderRadius: 8,
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  cardOne: {
    backgroundColor: "blue",
  },
  cardTwo : {
    backgroundColor : 'red',
  },
  cardThree : {
    backgroundColor : 'green',
  },
  cardFour : {
    backgroundColor : 'skyblue',
  },
  cardText  :{
    color : 'white'
  }
});
