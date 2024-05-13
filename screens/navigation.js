// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Ionicons from "react-native-vector-icons/Ionicons";

// const homeName = "Home";
// const cameraName = "Camera";
// const galleryName = "Gallery";

// const Tab = createBottomTabNavigator();

// const Navigation = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={homeName}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           let rn = route.name;

//           if (rn === homeName) {
//             iconName = focused ? "home" : "home-outline";
//           } else if (rn === cameraName) {
//             iconName = focused ? "list" : "list-outline";
//           } else if (rn === galleryName) {
//             iconName = focused ? "settings" : "settings-outline";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name={homeName} />
//       <Tab.Screen name={cameraName} />
//       <Tab.Screen name={galleryName} />
//     </Tab.Navigator>
//   );
// };

// export default Navigation;
