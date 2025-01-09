import { Text, View } from "react-native";
import {Link} from "expo-router";



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className='font-bold font-rubik text-xl' > Welcome to Re Estate</Text>
    </View>
  );
}
