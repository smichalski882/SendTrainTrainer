//File to store frontend logo for product
import { Text, View } from "react-native";
import React, { useEffect, useState} from "react";

export default function Logo() {
    return (
        <View style = {{justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 50, color: "black", fontWeight: "bold", fontStyle: "italic" }}>SendTrainTrainer</Text>
            <img src="https://static-00.iconduck.com/assets.00/train-icon-2048x1974-mxlofbg6.png" style={{ width: 200, height: 200 }} />
    </View>
    );
}