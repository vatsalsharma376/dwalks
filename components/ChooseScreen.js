import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IntroScreen from "./IntroScreen";
import MainApp from "./MainApp";

const ChooseScreen = () => {
  const checkNewUser = () => {
    AsyncStorage.setItem("userid", "vats");
    const user = AsyncStorage.getItem("userid");
    if (!user) {
      return true;
    } else {
      return false;
    }
  };
  return <>{checkNewUser() ? <IntroScreen /> : <MainApp />}</>;
};

export default ChooseScreen;

const styles = StyleSheet.create({});
