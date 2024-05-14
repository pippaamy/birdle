import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Camera from "./Camera";
import Gallery from "./Gallery";
import FriendScreen from "./FriendScreen";
import User from "./User";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

export default function MainScreen(headerOptions) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Image
                source={require("../assets/picture.png")}
                resizeMode="contain"
                style={styles.tabImage}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendScreen}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Image
                source={require("../assets/users-alt.png")}
                resizeMode="contain"
                style={styles.tabImage}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Image
                source={require("../assets/camera.png")}
                resizeMode="contain"
                style={styles.tabImage}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={styles.tabImage}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Image
                source={require("../assets/settings.png")}
                resizeMode="contain"
                style={styles.tabImage}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  cameraButton: {
    backgroundColor: "#7a4815",
    color: "#fff",
    fontSize: 20,
    marginRight: 10,
    padding: 5,
  },
  tabBar: {
    backgroundColor: "#DEBDD7",
    display: "flex",
    height: 80,
    zIndex: 1,
  },
  tabView: {
    alignItems: "center",
    backgroundColor: "#DEBDD7",
    height: 70,
    justifyContent: "center",
    width: 90,
    zIndex: 1,
  },
  tabImage: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
  tabText: {
    color: "#fff",
    fontSize: 20,
    zIndex: 1,
  },
});
