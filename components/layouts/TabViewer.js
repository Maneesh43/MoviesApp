import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Route1 from '../routes/Route1'
import Route2 from '../routes/Route2'
import Route3 from '../routes/Route3'

const TabViewer = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle:{backgroundColor:'#2c3e50'}
        }}
      >
        <Tab.Screen
          name="movies"
          component={Route1}
          options={{ tabBarColor: "#3333cc" }}
        />
        <Tab.Screen name="search results" component={Route2} />
        <Tab.Screen name="tv" component={Route3} />
      </Tab.Navigator>
    );
}

export default TabViewer

const styles = StyleSheet.create({})
