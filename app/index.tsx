import React, { useEffect, useState} from "react";
import Logo from "./logo";
import AddEntryButton from "./addEntryButton";
import ViewCalendarButton from "./viewCalendarButton";

export default function Index() {
  return (
    <div
      style={{
        flex: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      {/* position button at top left of screen */}
      <AddEntryButton />
      {/* position button at top right of screen */}
      <ViewCalendarButton />
      {/* position logo in middle of screen */}
      <Logo />
    </div>
  );
}
