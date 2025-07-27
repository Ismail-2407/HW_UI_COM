import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showToggle?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showToggle = false,
  keyboardType = "default",
}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !show}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
      {showToggle && (
        <TouchableOpacity onPress={() => setShow(!show)} style={styles.toggle}>
          <Text style={{ color: "#4CAF50" }}>{show ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  toggle: {
    padding: 8,
  },
});

export default CustomInput;
