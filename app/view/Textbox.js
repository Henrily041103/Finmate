import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';

const Textbox = (props) => {
    let message = props.message;
    let user = props.user;
    let textboxStyle = [styles().textbox, user==="bot"?styles().right:styles().left];
    return (
        <View style={styles().container}>
            <View style={textboxStyle}>
                <Text style={styles().text}>{message}</Text>
            </View>
        </View>
    );
}

const styles = () => {
    const {height, width} = useWindowDimensions();
    return StyleSheet.create({
        container: {
            marginHorizontal: 20
        },
        textbox: {
            width: width * 0.7,
            backgroundColor: "rgba(48, 250, 174, 1)",
            borderRadius: 20,
            marginVertical: 30
        },
        left: {
        },
        right: {
            alignSelf: "flex-end"
        },
        text: {
          textAlign: "justify",
          paddingVertical: 20,
          paddingHorizontal: 40
        }
      })
};

export default Textbox;