import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React from "react";

const FocussedStatusBar = (props) => {
  const isFocussed = useIsFocused();
  return isFocussed ? <StatusBar animated={true} {...props} /> : null;
};

export default FocussedStatusBar;
