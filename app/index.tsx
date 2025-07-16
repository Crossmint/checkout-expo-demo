import {
  CrossmintEmbeddedCheckout,
  CrossmintProvider,
} from "@crossmint/client-sdk-react-native-ui";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Device from "expo-device";

const apiKey = process.env.EXPO_PUBLIC_CLIENT_CROSSMINT_API_KEY ?? "";
if (!apiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_CROSSMINT_API_KEY is not set");
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CrossmintProvider apiKey={apiKey}>
          <CrossmintEmbeddedCheckout
            recipient={{
              walletAddress: "EbXL4e6XgbcC7s33cD5EZtyn5nixRDsieBjPQB7zf448",
            }}
            payment={{
              crypto: {
                enabled: false,
              },
              fiat: {
                enabled: true,
                allowedMethods: {
                  card: true,
                  applePay: ["iOS", "iPadOS"].includes(Device.osName as string),
                  googlePay: Device.osName === "Android",
                },
              },
              defaultMethod: "fiat",
            }}
            lineItems={{
              tokenLocator:
                "solana:6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
              executionParameters: {
                mode: "exact-in",
                amount: "1",
                maxSlippageBps: "500",
              },
            }}
          />
        </CrossmintProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
});
