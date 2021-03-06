/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | {model: Candidate};
  ClubRoot: NavigatorScreenParams<RootTabParamList> | {model: Club};
  Modal: undefined;
  NotFound: undefined;
  Postings: undefined;
  Clubs: undefined;
  NewRelease: undefined;
  Login: undefined;
  ClubDetail: {model: Club};
  PostingDetail: { model: Posting };
  EditProfile: {model: Candidate};
  StudentLogin: undefined;
  StudentRegistration: undefined;
  Intro: undefined;
  EditClubProfile: {model: Club};
  ViewApplications: {model: Club};
  AddPosting: {model: Club};
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Dashboard: undefined;
  Profile: {model: Candidate};
  ClubProfile: {model: Club};
  ClubDashboard: {model: Club};
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
