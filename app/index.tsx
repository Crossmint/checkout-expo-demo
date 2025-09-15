import {
  CrossmintEmbeddedCheckout,
  CrossmintProvider,
} from "@crossmint/client-sdk-react-native-ui";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
              },
              defaultMethod: "fiat",
              receiptEmail: "hello@crossmint.com",
            }}
            lineItems={{
              tokenLocator:
                "solana:7EivYFyNfgGj8xbUymR7J4LuxUHLKRzpLaERHLvi7Dgu",
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
