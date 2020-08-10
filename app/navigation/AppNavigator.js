import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feeds" component={FeedNavigator} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
