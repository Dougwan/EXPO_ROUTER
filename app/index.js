import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("signup");
  };

  const handleLogin = () => {
    router.replace("home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignUp}>
        <FontAwesome5 name="envelope" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <FontAwesome5 name="user" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    justifyContent: "center",
    alignItems: "center",
  },
});
