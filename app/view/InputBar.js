import HeaderBox from "./Header";
import React from "react";
import { View, TextInput, Button } from "react-native";
import { UpdateMessage } from "../controller/MsgBoxController";

const InputBar = (props) => {
  const [text, onChangeText] = React.useState("");
  return (
    <View>
      <TextInput
        style={styles().input}
        placeholder="Please enter text"
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <Button
        onPress={(message) => UpdateMessage(message, props.changeMessage)}
      >
        Send
      </Button>
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    input: {},
  });
};

export default InputBar;
