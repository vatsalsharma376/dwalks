import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChooseScreen from "./components/ChooseScreen";
import IntroScreen from "./components/IntroScreen";
import MainApp from "./components/MainApp";
import Map from "./components/mainScreens/Map";
import Profile from "./components/mainScreens/Profile";
import Trending from "./components/mainScreens/Trending";
import Chats from "./components/mainScreens/Chats";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="profile" component={Profile} />
    <Tab.Screen name="map" component={Map} />
    <Tab.Screen name="trending" component={Trending} />
    <Tab.Screen name="chat" component={Chats} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="choose" component={ChooseScreen} />
        <Stack.Screen name="profile" component={TabNavigator} />
        <Stack.Screen name="intro" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
