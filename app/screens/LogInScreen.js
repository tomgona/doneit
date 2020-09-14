import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import jwtDecode from 'jwt-decode';

import Screen from "../components/Screen";
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from '../api/auth';
import { useAppState } from "@react-native-community/hooks";
import { useFormikContext } from "formik";
import AuthContext from "../auth/context";
import authStorage from '../auth/storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Your Email"),
  password: Yup.string().required().min(8).label("Your Password"),
});

function LogInScreen() {
  const authContext = useContext(AuthContext);
  const [loginfailed, setLoginFailed] = useAppState(false);


  const handleSubmit = ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (! result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: " ", password: " " }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error='Invalid email and/or password.' visible={loginfailed}/>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          icon="lock"
          name="password"
          placeholder="Password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
export default LogInScreen;
