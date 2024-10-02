import { Text, View } from "react-native";
import React, { useEffect, useState} from "react";
import Logo from "./logo";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E42C2C",
      }}
    >
      <button style={{ position: "absolute", top: 20, left: 20, fontSize: 50, color: "black", padding: 10, borderRadius: 25, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
        +
      </button>
      <button style={{ position: "absolute", top: 20, right: 20, fontSize: 50, color: "#E42C2C", padding: 10, borderRadius: 25, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/face-monochrome-icon/calendar-249.png" style={{ width: 50, height: 50 }} />
      </button>
      <Logo />
    </View>
  );
}
