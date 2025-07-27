import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const AuthScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text
          style={[
            styles.header,
            isSignUp ? styles.activeHeader : styles.inactiveHeader,
          ]}
        >
          Sign Up
        </Text>
        <Text
          style={[
            styles.header,
            !isSignUp ? styles.activeHeader : styles.inactiveHeader,
          ]}
        >
          Log In
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderRow}>
          <Text style={styles.formHeader}>
            {isSignUp ? "Sign Up" : "Log In"}
          </Text>
          <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
            <Text style={{ color: "#4CAF50", fontSize: 16, fontWeight: "500" }}>
              {isSignUp ? "Login" : "Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
        {isSignUp && (
          <CustomInput placeholder="Name" value={name} onChangeText={setName} />
        )}
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          showToggle
        />
        {isSignUp && (
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              onPress={() => setNewsletter(!newsletter)}
              style={styles.checkboxTouchable}
            >
              <View
                style={[styles.checkbox, newsletter && styles.checkboxChecked]}
              >
                {newsletter && <View style={styles.checkboxInner} />}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View>
        )}
        <CustomButton
          title={isSignUp ? "Sign Up" : "Log In"}
          onPress={() => {}}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    color: "#BDBDBD",
    paddingVertical: 8,
  },
  activeHeader: {
    color: "#222",
    borderBottomWidth: 2,
    borderBottomColor: "#4CAF50",
  },
  inactiveHeader: {
    color: "#BDBDBD",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  formHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  formHeader: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxTouchable: {
    marginRight: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    borderColor: "#4CAF50",
    backgroundColor: "#4CAF50",
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  checkboxLabel: {
    fontSize: 13,
    color: "#757575",
    flex: 1,
  },
  forgotText: {
    color: "#4CAF50",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "500",
  },
});

export default AuthScreen;
