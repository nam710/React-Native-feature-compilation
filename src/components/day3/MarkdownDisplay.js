import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import  PropTypes  from "prop-types";
import Markdown from "react-native-markdown-display";



const MarkdownDisplay = ({children}) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

MarkdownDisplay.propTypes={
    children: PropTypes.node
}

export default MarkdownDisplay;

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginBottom: 10,
    marginTop: 15,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginBottom: 5,
    marginTop: 10,
    lineHeight: 30,
  },
  body: { fontSize: 16, lineHeight: 24 },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderRadius:10
  },
});
