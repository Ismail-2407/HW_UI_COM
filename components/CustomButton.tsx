import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomButton;
