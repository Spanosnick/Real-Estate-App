import { Text, View } from "react-native";
import {Link} from "expo-router";
import Test from "@/components/test";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className='font-bold' > Welcome to Re Estate</Text>
        <Test/>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/5"}>Properties</Link>
    </View>
  );
}
