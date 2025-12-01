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

/**
 * Onramp Checkout - Headless Order Flow
 *
 * For onramp, you must create the order server-side first using the Create Order API.
 * This returns an `orderId` and `clientSecret` to pass to the embedded checkout.
 *
 * See README.md for the full server-side order creation example.
 */
export default function OnrampCheckout() {
  // TODO: Replace with values from your server's Create Order API response
  const orderId = "your-order-id";
  const clientSecret = "your-client-secret";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CrossmintProvider apiKey={apiKey}>
          <CrossmintEmbeddedCheckout
            orderId={orderId}
            clientSecret={clientSecret}
            payment={{
              receiptEmail: "user@example.com",
              crypto: { enabled: false },
              fiat: { enabled: true },
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
