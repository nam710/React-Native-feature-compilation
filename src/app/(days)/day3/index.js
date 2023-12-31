import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '../../../components/day3/MarkdownDisplay'


const description = `
# Markdown
Integrate Markdown content in **React Native**

📚 **Today's Agenda:**
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
`

const index = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
        <Stack.Screen options={{title:'Day 3: Markdown'}}/>
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={'/day3/editor'}  asChild>
        <Button color={'mediumorchid'} title='Go to editor'/>
      </Link>
    </SafeAreaView>
  )
}

export default index
const styles = StyleSheet.create({
    container: {
     flex:1
    },
  });