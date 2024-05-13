import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";

const headerOptions = {
  title: "Birdle",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#DEBDD7",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={headerOptions}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
