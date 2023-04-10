import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import config from './src/aws-exports';

Amplify.configure(config);

export default function App() {
  return (
    <NavigationContainer>
      
      <RootNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
