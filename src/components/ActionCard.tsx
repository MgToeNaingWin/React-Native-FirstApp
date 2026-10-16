import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ActionCard() {
  function openWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }
  return (
    <View>
      <Text style={styles.HeadingText}>Action Beatz</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.CardHeadingText}>Discovery</Text>
        <View>
          <Image
            source={{
              uri: "https://static.found.ee/user/492288/res-dfbfebf6-dcd8-4d9b-b139-3ebb797ebb46-30940446-2c47-45a8-a6c3-62588e5cc7fe",
            }}
            style={styles.CardImage}
          />
          <TouchableOpacity
            onPress={() => openWebsite("https://found.ee/yungpunch_discovery")}
          >
            <View style={styles.CardFooter}>
              <Text style={styles.FooterText}>Listen!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 13,
    margin:12
  },
  card: {
    width: 350,
    height: 430,
    marginVertical: 6,
    marginHorizontal: 19,
  },
  cardElevated: {
    backgroundColor: "white",
    elevation: 4,
    shadowOffset: {
      width: 3,
      height: 2,
    },
  },
  CardHeadingText: {
    fontSize: 21,
    fontWeight: "bold",
    paddingLeft: 16,
    paddingTop: 29,
  },
  CardImage: {
    width: 318,
    height: 270,
    margin: 15,
  },
  CardFooter: {
    backgroundColor: "black",
    elevation: 2,

    opacity: 0.9,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 32,
  },
  FooterText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
