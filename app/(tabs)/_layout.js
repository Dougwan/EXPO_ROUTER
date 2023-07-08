import React from "react";
import { Tabs } from "expo-router";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          margin: "3%",
          height: 60,
          borderRadius: 8,
          backgroundColor: "#0C243C",
        },
        tabBarActiveTintColor: "#AD8523",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact-us"
        options={{
          title: "Contato",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="comments" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="consultancies"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="list" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
