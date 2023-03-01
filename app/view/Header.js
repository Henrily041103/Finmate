import { StyleSheet, Text, View } from "react-native";

const HeaderBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Finmate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:100,
    paddingTop: 50,
    backgroundColor: "rgba(128, 128, 225, 1)",
    alignSelf: 'stretch'
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  }
});

export default HeaderBox;