import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";
import MarkdownDisplay from "../../../components/day3/MarkdownDisplay";
import { Stack } from "expo-router";

const template = `# Markdown Editor

Hello **World**!
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <Stack.Screen options={{title:'Markdown Editor'}}/>
      <View style={styles.tabsContainer}>
        <Pressable onPress={()=>setTab('edit')} style={[styles.tab,tab === 'edit' ?{borderColor:'mediumorchid'}:{borderColor:'gray'}]}>
          <Text style={[styles.tabText,tab === 'edit' ?{color:'mediumorchid'}:{color:'black'}]}>Edit</Text>
        </Pressable>
        <Pressable onPress={()=>setTab('preview')} style={[styles.tab,tab === 'preview' ?{borderColor:'mediumorchid'}:{borderColor:'gray'}]}>
          <Text style={[styles.tabText,tab === 'preview' ?{color:'mediumorchid'}:{color:'black'}]}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          value={content}
          multiline
          onChangeText={setContent}
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    padding: 10,
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    padding: 20,
    textAlignVertical: "top",
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
