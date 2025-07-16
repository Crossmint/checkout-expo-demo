# Crossmint Checkout Expo Demo

## Introduction

A React Native Expo demo app showcasing Crossmint's embedded checkout functionality. This quickstart demonstrates how to integrate Crossmint's React Native SDK (`@crossmint/client-sdk-react-native-ui`) into mobile applications.

## Key Features

- Accept fiat payments via credit card, Apple Pay, and Google Pay
- Memecoin purchase integration on Solana
- Cross-platform support (iOS, Android, Web)
- Embedded checkout component with customizable UI

## Prerequisites

- Create a developer account in the [Crossmint Console](https://staging.crossmint.com/)
- Get your client-side API key from the console

## Setup

1. Clone and navigate to the project:

   ```bash
   git clone <repository-url>
   cd checkout-expo-demo
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   EXPO_PUBLIC_CLIENT_CROSSMINT_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   pnpm start
   ```

## Code Sample

Here's how the Crossmint React Native SDK is integrated:

```tsx
import {
  CrossmintEmbeddedCheckout,
  CrossmintProvider,
} from "@crossmint/client-sdk-react-native-ui";

export default function App() {
  return (
    <CrossmintProvider apiKey={apiKey}>
      <CrossmintEmbeddedCheckout
        recipient={{
          walletAddress: "EbXL4e6XgbcC7s33cD5EZtyn5nixRDsieBjPQB7zf448",
        }}
        payment={{
          fiat: {
            enabled: true,
            allowedMethods: {
              card: true,
              applePay: true,
              googlePay: true,
            },
          },
        }}
        lineItems={{
          tokenLocator: "solana:6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
          executionParameters: {
            mode: "exact-in",
            amount: "1",
            maxSlippageBps: "500",
          },
        }}
      />
    </CrossmintProvider>
  );
}
```

## Available Scripts

- `pnpm start` - Start Expo development server
- `pnpm ios` - Run on iOS simulator
- `pnpm android` - Run on Android emulator
- `pnpm web` - Run in web browser

## Advanced Usage

For advanced usage, refer to the [Crossmint documentation](https://docs.crossmint.com/):

- [Payment Methods](https://docs.crossmint.com/payments/embedded/guides/payment-methods)
- [UI Customization](https://docs.crossmint.com/payments/embedded/guides/ui-customization)
