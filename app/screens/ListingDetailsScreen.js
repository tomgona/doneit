import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Selling a red jacket</AppText>
        <AppText style={styles.price}>KES 100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Tom Gona"
            subtitle="5 listings"
            image={require("../assets/tom.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
