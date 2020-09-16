import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import { ListItem } from "../components/lists";
import { Platform } from "react-native";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        source={listing.image[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>KES {listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Tom Gona"
            subtitle="5 listings"
            image={require("../assets/tom.jpg")}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
