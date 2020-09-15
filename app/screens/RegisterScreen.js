import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import register from "../api/users";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
          />
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            icon="email"
            keyBoardType="email-address"
          />
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            icon="lock"
            secureTextEntry={true}
          />
          <SubmitButton title="register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
