import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
    name, 
    iconColor="#fff", 
    backgroundColor="red", 
    size=50}) {
    return(
        <View style={{
            backgroundColor,
            width: size,
            height: size,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center",

        }}>
            <MaterialCommunityIcons 
             name={name}
             size={size * 0.5}
             color={iconColor}/>
        </View>
    );
}

export default Icon;