import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function HeroCard({
  name,
  image,
  power,
  strengths,
  place,
}: any) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.power}>⚡{power}</Text>
      </View>
      <Image
        source={{ uri: image }}
        accessibilityLabel={`${name} marvel`}
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <Text>{place}</Text>
      </View>
      <View>
        <Text>Strenths:{strengths.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  power: {
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 10,
    paddingBottom: 50,
    minHeight: "auto",
    margin: 16,
    marginBottom: 40,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        eleveation: 5,
      },
    }),
  },
});
