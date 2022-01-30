import React from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import { ScrollView } from "react-native";

//imporing styles
import styles from "../../styles/RegistrationStyles"

import * as Yup from "yup";
import { RootStackScreenProps } from "../../types";
// import {
//   useFonts,
//   Comfortaa_400Regular,
//   Comfortaa_700Bold,
// } from "@expo-google-fonts/comfortaa";
// import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
// import { Rubik_900Black, Rubik_400Regular } from "@expo-google-fonts/rubik";
// import AppLoading from "expo-app-loading";
import { Keyboard } from "react-native";
// export default function LoginScreen({navigation}: RootStackScreenProps<"Login">)
export default function StudentRegistration({navigation}: RootStackScreenProps<"StudentLogin">) {
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    resume: Yup.string().required("Resume link is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

//   let [fontsLoaded] = useFonts({
//     Comfortaa_400Regular,
//     Comfortaa_700Bold,
//     Roboto_400Regular,
//     Roboto_700Bold,
//     Rubik_400Regular,
//     Rubik_900Black,
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
    return (
        
        <TouchableWithoutFeedback
            // onPress={() => Keyboard.dismiss()}
            accessible={false}>
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.titleText}> Student Registration</Text>
            <Formik
                initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                resume: "",
                password: "",
                confirmPassword: "",
                }}
                onSubmit={(values) => {
                // console.log("in reg 1 these are the values ", values);
                const candidate: Candidate = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    resume: values.resume,
                    id: ""
                };
                navigation.navigate("Root", {model: candidate});
                
                }}
                validationSchema={validationSchema}
                // uncomment above line to use validation
            >
                {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                }) => (
                <View>
                    <Text style={styles.labelText}>Email Address</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    />
                    {errors.email && touched.email ? (
                    <Text style={styles.errorText}>{errors.email}</Text>
                    ) : null}
                    <Text style={styles.labelText}>First Name</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                    <Text style={styles.errorText}>{errors.firstName}</Text>
                    ) : null}
                    <Text style={styles.labelText}>Last Name</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                    ) : null}
                    <Text style={styles.labelText}>Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        value={values.phone}
                        />
                    {errors.phone && touched.phone ? (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                    ) : null}
                    <Text style={styles.labelText}>Link to Resume</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange("resume")}
                        onBlur={handleBlur("resume")}
                        value={values.resume}
                        />
                    {errors.resume && touched.resume ? (
                    <Text style={styles.errorText}>{errors.resume}</Text>
                    ) : null}
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    />
                    {errors.password && touched.password ? (
                    <Text style={styles.errorText}>{errors.password}</Text>
                    ) : null}
                    <Text style={styles.labelText}>Confirm Password</Text>
                    <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                    ) : null}
                    {/* <View style={styles.submit}> */}
                    {/* <Button onPress={handleSubmit}></Button> */}
                    <TouchableOpacity style={styles.submit} onPress={handleSubmit as any}>
                    <Text style={styles.submitText}>Register</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
                )}
            </Formik>
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
      
    );
//   }
};
