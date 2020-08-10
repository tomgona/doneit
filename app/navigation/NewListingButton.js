import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default NewListingButton;
