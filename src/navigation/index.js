import{useEffect, useState} from 'react';
import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import {Auth, Hub} from 'aws-amplify';

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();

export const navigationRef = React.createRef();

const RootNavigator = () => {
    const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
         {user ? (
          <Stack.Screen name="HomeTabs" component={HomeTabs}/>
        ) : (
      <>
      <Stack.Screen name="OnboardingScreen" component={OnboardingStackNavigator} />
      <Stack.Screen name="SignIn" component={SignInStackNavigator} />
<Stack.Screen name="SignUp" component={SignUpStackNavigator} />
<Stack.Screen name="ConfirmEmail" component={ConfirmEmailStackNavigator} 
/>     
<Stack.Screen   name="ForgotPassword"       component={ForgotPasswordStackNavigator}
            />
<Stack.Screen name="NewPassword" component={NewPasswordStackNavigator} />
      </>
        )}
    </Stack.Navigator>
  );
};

export function navigate(name, params){
  navigationRef.current?.navigate(name, params);
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
     <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
     </OnboardingStack.Navigator>
  );
};

const SignInStack = createNativeStackNavigator();

const SignInStackNavigator = () => {
  return (
     <SignInStack.Navigator>
      <SignInStack.Screen name="SignIn" component={SignInScreen} />
     </SignInStack.Navigator>
  );
};

const SignUpStack = createNativeStackNavigator();

const SignUpStackNavigator = () => {
  return (
     <SignUpStack.Navigator>
      <SignUpStack.Screen name="SignUp" component={SignUpScreen} />
     </SignUpStack.Navigator>
  );
};

const ConfirmEmailStack = createNativeStackNavigator();

const ConfirmEmailStackNavigator = () => {
  return (
     <ConfirmEmailStack.Navigator>
      <ConfirmEmailStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
     </ConfirmEmailStack.Navigator>
  );
};

const ForgotPasswordStack = createNativeStackNavigator();

const ForgotPasswordStackNavigator = () => {
  return (
     <ForgotPasswordStack.Navigator>
      <ForgotPasswordStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
     </ForgotPasswordStack.Navigator>
  );
};

const NewPasswordStack = createNativeStackNavigator();

const NewPasswordStackNavigator = () => {
  return (
     <NewPasswordStack.Navigator>
      <NewPasswordStack.Screen name="NewPassword" component={NewPasswordScreen} />
     </NewPasswordStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
