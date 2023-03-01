import { StyleSheet, View } from "react-native";
import React from "react";
import Textbox from "./Textbox";
import InputBar from "./InputBar";

const MessageBox = () => {
  let message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  let user1 = "bot";
  let user2 = "user";
  let [messageState, setMessage] = React.useState([
    <Textbox message={message} user={user1}></Textbox>,
    <Textbox message={message} user={user2}></Textbox>,
  ]);
  const changeMessage = (message, user) => {
    setMessage((currentState) => [
      ...currentState,
      <Textbox message={message} user={user}></Textbox>,
    ]);
  };

  return (
    <View>
      <View style={styles().messageBox}>{messageState}</View>
      <InputBar changeMessage={changeMessage}></InputBar>
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    messageBox: {},
  });
};

export default MessageBox;
