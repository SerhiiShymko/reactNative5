import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default CommentsScreen;
