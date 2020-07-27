import React, { useState } from "react";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
const initialMessages = [
  {
    id: 1,
    title: "Tom Mwakamsha Gona",
    description:
      "Here is how you can see the messages screen and im sure youre gonna love everything",
    image: require("../assets/tom.jpg"),
  },
  {
    id: 2,
    title: "Emmanuel Amani Mwakamsha",
    description:
      "My description is about the good use of a Messages screen and see how well it can display the items",
    image: require("../assets/tom.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            showChevrons={
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="black"
              />
            }
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
