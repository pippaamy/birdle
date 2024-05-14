// import { NavigationContainer } from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MainScreen from "./screens/MainScreen";

// const headerOptions = {
//   title: "Birdle",
//   headerTitleAlign: "center",
//   headerStyle: {
//     backgroundColor: "#DEBDD7",
//   },
//   headerTintColor: "#fff",
//   headerTitleStyle: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// };
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={MainScreen}
//           options={headerOptions}
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./library/supabase";
import Auth from "./components/Auth";
import Account from "./components/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
