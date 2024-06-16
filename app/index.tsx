import HeroCard from "@/components/card/HeroCards";
import Home from "@/screens/Home";
import List from "@/screens/List";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor={"black"} />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
