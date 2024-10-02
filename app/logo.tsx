//File to store frontend logo for product
import React, { useEffect, useState} from "react";

export default function Logo() {
    return (
        <div style = {{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", alignSelf: 'center', justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: 'column'}}>
            <h1 style={{fontSize: 50, color: "black", fontWeight: "bold", fontFamily: "Lazelar"}}>SendTrainTrainer</h1>
            <img src="https://static-00.iconduck.com/assets.00/train-icon-2048x1974-mxlofbg6.png" style={{ width: 200, height: 200 }} />
    </div>
    );
}