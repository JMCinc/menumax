import {StatusBar} from 'expo-status-bar';
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import config from './src/aws-exports';
import {navigationRef, isReadyRef} from './src/navigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="light" />
<RootNavigator />
  
 </NavigationContainer>
  );
}
