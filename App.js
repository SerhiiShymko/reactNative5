import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./Screens/authScreens/LoginScreen";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import Home from "./Screens/navigateScreens/Home";
import CommentsScreen from "./Screens/navigateScreens/CommentsScreen";
import MapScreen from "./Screens/navigateScreens/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{
              title: "Коментарі",
              headerTitleAlign: "center",
              headerStyle: {
                height: 100,
                backgroundColor: "#fff",
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontWeight: 500,
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: 0.41,
              },
            }}
          />
          <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              title: "Мапа",
              headerTitleAlign: "center",
              headerStyle: {
                height: 100,
                backgroundColor: "#fff",
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontWeight: 500,
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: 0.41,
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>

      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
