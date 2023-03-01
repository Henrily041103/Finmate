import { StatusBar } from "expo-status-bar";

import HeaderBox from "./Header";


// import {useWindowDimensions} from 'react-native';

export default function App() {
  
  
  return (
    <View style={styles().container}>
      <HeaderBox />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = () => {
  // const {height} = useWindowDimensions();
  return StyleSheet.create({
    container: {},
  });
};
