import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      
      <RootNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
