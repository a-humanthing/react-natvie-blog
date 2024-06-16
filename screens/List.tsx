import HeroCard from "@/components/card/HeroCards";
import { characters } from "@/constants/characters";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";

const List = () => {
  return (
    <SafeAreaView>
      <ScrollView style={[styles.androidSafeArea]}>
        {characters.map((character) => (
          <HeroCard key={character.name} {...character} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default List;
