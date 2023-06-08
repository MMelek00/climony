import AppNavigator from "./src/navigation";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import color from "./src/utils/color";
const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    AdventProRegular: require("./assets/fonts/AdventPro.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    SFCompact: require("./assets/fonts/SF-Compact-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar translucent />
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </React.Fragment>
  );
}
