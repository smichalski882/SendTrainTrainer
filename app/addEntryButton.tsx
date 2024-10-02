//file to store the add entry button for the home page
import { Text, View } from "react-native";
import React, { useEffect, useState} from "react";

export default function AddEntryButton() {
    return (
        <View style = {{justifyContent: "center", alignItems: "center"}}>
            <button style={{ position: "absolute", top: 20, left: 20, fontSize: 50, color: "black", padding: 10, borderRadius: 25, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
                +
            </button>
        </View>
    );
}