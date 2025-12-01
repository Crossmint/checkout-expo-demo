import { Link, type Href } from "expo-router";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/crossmint-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.buttonContainer}>
          <Link href={"/memecoin" as Href} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Memecoin</Text>
            </Pressable>
          </Link>

          <Link href={"/onramp" as Href} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Onramp</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 40,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
