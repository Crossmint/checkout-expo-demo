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

export default function MemecoinCheckout() {
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
              walletAddress: "0x188554D8Db23AB47e07f61c427Acd4FE1dd6dFf7",
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
                "base-sepolia:0xC845B7ACbcFD132F5b60b39a37683fF734231500",
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

