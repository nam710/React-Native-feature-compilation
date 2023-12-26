import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 40 }}>
        Day Details Screen
      </Text>

      <Link href={'/day2/onboarding'} asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default DayDetailsScreen;
