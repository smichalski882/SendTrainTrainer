//button to view the calendar of entries
import { Text, View } from "react-native";
import React, { useEffect, useState} from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ViewCalendarButton() {
    return (
        <View style = {{justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
            <button style={{ position: "absolute", top: 20, right: 20, padding: 10, borderRadius: 25, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/face-monochrome-icon/calendar-249.png" style={{ width: 50, height: 50 }} />
            </button>
        </View>
    );
}