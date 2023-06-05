import { ImageBackground } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.ljXVynSy}></View><Text style={styles.XXAkKRwo}>Lorem ipsum…</Text><ImageBackground style={styles.ENzrYZUo} source={require("./IMG_20230313_183756.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ljXVynSy: {
    height: 60,
    width: 140,
    backgroundColor: "#d82020",
    borderRadius: 53,
    color: "#777777",
    position: "absolute",
    left: 112,
    top: 5
  },
  XXAkKRwo: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ENzrYZUo: {
    width: 246,
    height: 197
  }
});
export default Untitled4;