import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})
function RegisterScreen(props) {
    return(
        <Screen style={styles.container}>
            <AppForm
            initialValues={{name: "", email: "", password: ""}}
            onSubmit={(values) => console.log(values)}
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
                <SubmitButton title="register"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default RegisterScreen;