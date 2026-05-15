# Crossmint Checkout Expo Demo

A React Native Expo demo showcasing Crossmint's embedded checkout for **Memecoin** and **Onramp** flows.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables:

   ```bash
   EXPO_PUBLIC_CLIENT_CROSSMINT_API_KEY=your_client_api_key
   ```

3. Start the app:

   ```bash
   pnpm start
   ```

## Checkout Types

### 1. Memecoin Checkout

Purchase tokens directly with fiat. No server-side setup required.

```tsx
<CrossmintEmbeddedCheckout
  recipient={{
    walletAddress: "0x188554D8Db23AB47e07f61c427Acd4FE1dd6dFf7",
  }}
  payment={{
    crypto: { enabled: false },
    fiat: { enabled: true },
    receiptEmail: "user@example.com",
  }}
  lineItems={{
    tokenLocator: "base-sepolia:0xC845B7ACbcFD132F5b60b39a37683fF734231500",
    executionParameters: {
      mode: "exact-in",
      amount: "1",
      maxSlippageBps: "500",
    },
  }}
/>
```

### 2. Onramp Checkout (Headless)

For onramp, create the order server-side first, then use the embedded checkout.

#### Step 1: Create Order (Server-side)

```bash
curl --request POST \
  --url https://staging.crossmint.com/api/2022-06-09/orders \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: YOUR_SERVER_API_KEY' \
  --data '{
    "lineItems": [
      {
        "tokenLocator": "solana:4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
        "executionParameters": {
          "mode": "exact-in",
          "amount": "5"
        }
      }
    ],
    "payment": {
      "method": "card",
      "receiptEmail": "user@example.com"
    },
    "recipient": {
      "walletAddress": "user-wallet-address"
    }
  }'
```

**Staging USDC Token Addresses:**
| Chain  | Address |
|--------|---------|
| Solana | `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU` |
| Base   | `0x036CbD53842c5426634e7929541eC2318f3dCF7e` |

#### Step 2: Use Embedded Checkout (Client-side)

Pass the `orderId` and `clientSecret` from the order response:

```tsx
<CrossmintEmbeddedCheckout
  orderId={orderId}
  clientSecret={clientSecret}
  payment={{
    receiptEmail: "user@example.com",
    crypto: { enabled: false },
    fiat: { enabled: true },
  }}
/>
```

## API Keys

You need two API keys from the [Crossmint Console](https://staging.crossmint.com/):

- **Client-side API key** - For the embedded checkout component
- **Server-side API key** - For creating orders (scopes: `orders.create`, `orders.read`)

## Resources

- [React Native Onramp Quickstart](https://docs.crossmint.com/stablecoin-orchestration/onramp/quickstarts/react-native)
- [Payment Methods Guide](https://docs.crossmint.com/payments/embedded/guides/payment-methods)
- [UI Customization](https://docs.crossmint.com/payments/embedded/guides/ui-customization)
