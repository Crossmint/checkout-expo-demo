import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitle: "Back",
        headerTintColor: "#1a1a1a",
        headerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="memecoin" options={{ title: "Memecoin Checkout" }} />
      <Stack.Screen name="onramp" options={{ title: "Onramp Checkout" }} />
    </Stack>
  );
}
