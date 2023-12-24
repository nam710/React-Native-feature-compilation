import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Link} from 'expo-router';

const DayListItem = ({day}) => {
  return (
   <Link href={`/day${day}`} asChild>
     <Pressable style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </Pressable>
   </Link>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#F9EDE3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    fontSize: 70,
    color: "#9b4521",
    fontFamily:'AmaticBold'
  },
});
