import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="PostScreen"
      backBehavior="order"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "PostsScreen") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (routeName === "CreatePostScreen") {
            iconName = focused ? "add" : "add-outline";
          } else if (routeName === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarItemStyle: {
          width: 70,
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
        },
        tabBarStyle: {
          height: 83,
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#808080",
      })}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
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
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Ionicons
                name="log-in-outline"
                size={30}
                color="#BDBDBD"
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
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

          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("PostsScreen")}
              style={styles.ArrowBack}>
              <Ionicons name="arrow-back" size={24} color={"#212121"} />
            </Pressable>
          ),
          tabBarStyle: {
            height: 0,
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  LogOutIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },

  ArrowBack: {
    paddingLeft: 16,
  },
});

export default Home;
