/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { Text } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import DashboardScreen from "../screens/candidates/DashboardScreen";
import {
  RootStackParamList,
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ProfileScreen from "../screens/candidates/ProfileScreen";
import PostingsScreen from "../screens/PostingsScreen";
import ClubsScreen from "../screens/candidates/ClubsScreen";
import NewReleaseScreen from "../screens/candidates/NewReleaseScreen";
import LoginScreen from "../screens/LoginScreen";
// import EditProfileScreen from "../screens/EditProfileScreen";
import StudentRegistration from "../screens/registration/StudentRegistration";
import Intro from "../screens/Intro";
import EditProfileScreen from "../screens/candidates/EditProfileScreen";
import ClubProfileScreen from "../screens/ClubProfileScreen";
import ClubDashboardScreen from "../screens/ClubDashboardScreen";
import ViewApplicationsScreen from "../screens/ViewApplicationsScreen";
import { defaultCandidate, defaultClub } from "../util/default";
import EditClubProfileScreen from "../screens/EditClubProfileScreen";
import AddPostingScreen from "../screens/AddPostingScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentRegistration"
        component={StudentRegistration}
        options={{ title: "Student Registration" }}
        />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
        // initialParams={{ candidate: Candidate}}
      />
      <Stack.Screen
        name="ClubRoot"
        component={ClubBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Postings"
        component={PostingsScreen}
        options={{ title: "Postings" }}
      />
      <Stack.Screen
        name="Clubs"
        component={ClubsScreen}
        options={{ title: "Clubs" }}
      />
      <Stack.Screen
        name="NewRelease"
        component={NewReleaseScreen}
        options={{ title: "New Release" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />
      <Stack.Screen
        name="ViewApplications"
        component={ViewApplicationsScreen}
        initialParams={{ model: defaultClub }}
        options={{ title: "All Applications" }}
      />
      <Stack.Screen
        name="AddPosting"
        component={AddPostingScreen}
        options={{ title: "Add New Posting" }}
      />
      <Stack.Screen
        name="EditClubProfile"
        component={EditClubProfileScreen}
        options={{ title: "Edit Club Profile" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function ClubBottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="ClubDashboard"
        component={ClubDashboardScreen}
        options={({ navigation }: RootTabScreenProps<"ClubDashboard">) => ({
          title: "Dashboard",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
        initialParams={{ model: defaultClub }}
      />
      <BottomTab.Screen
        name="ClubProfile"
        component={ClubProfileScreen}
        options={({ navigation }: RootTabScreenProps<"ClubProfile">) => ({
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("EditClubProfile", { model: defaultClub })
              }
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Text style={{ marginRight: 20, fontSize: 14 }}>Edit</Text>
            </Pressable>
          ),
        })}
        initialParams={{ model: defaultClub }}
      />
    </BottomTab.Navigator>
  );
}

function BottomTabNavigator({route, navigation}:RootStackScreenProps<"Root">) {
  const colorScheme = useColorScheme();
  const defaultCandidate: Candidate = {
    firstName: "Marcus",
    lastName: "Aurelius",
    email: "",
    phone: "",
    resume: "",
    id: ""
  };
  console.log(route); 
  // const {model} = route.params;
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }: RootTabScreenProps<"Dashboard">) => ({
          title: "Dashboard",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("EditProfile", { model: defaultCandidate })
              }
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Text style={{ marginRight: 20, fontSize: 14 }}>Edit</Text>
            </Pressable>
          ),
        })}
        initialParams={{ model: defaultCandidate }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
