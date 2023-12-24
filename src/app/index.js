import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import DayListItem from "../../src/components/core/DayListItem";


const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={days}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },

  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
