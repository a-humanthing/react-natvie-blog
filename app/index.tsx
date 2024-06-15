import { captain, hulk, ironMan, thanos, thor } from "@/assets/graphics";
import HeroCard from "@/components/card/HeroCards";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const characters = [
    {
      name: "Thor",
      image: thor,
      strengths: ["mjolner", "strombreaker"],
      power: 150,
      place: "Asgard",
    },
    {
      name: "Iron Man",
      image: ironMan,
      strengths: ["mjolner", "strombreaker"],
      power: 150,
      place: "Asgard",
    },
    {
      name: "Captain Rogers",
      image: captain,
      strengths: ["mjolner", "strombreaker"],
      power: 150,
      place: "Asgard",
    },
    {
      name: "Thanos",
      image: thanos,
      strengths: ["mjolner", "strombreaker"],
      power: 150,
      place: "Asgard",
    },
    {
      name: "Hulk",
      image: hulk,
      strengths: ["mjolner", "strombreaker"],
      power: 150,
      place: "Asgard",
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} />
      <ScrollView style={[styles.androidSafeArea]}>
        {characters.map((character) => (
          <HeroCard key={character.name} {...character} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
