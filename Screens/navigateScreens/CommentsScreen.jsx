import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-web";

const CommentsScreen = () => {
  const {
    params: { comments, img, title },
  } = useRoute();

  const [comment, setComments] = useState(null);

  const handleCommentAdd = () => {
    console.log(comment);
    setComments(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image sourse={img} alt={title} style={styles.photo} />
      </View>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comments={item} />}
        keyExtractor={(item) => item.id}
        showVerticalScrollIndicator={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.inputWrapper}>
          <TextInput
            changeText={setComments}
            style={styles.input}
            placeholder="Коментувати..."
            placeholderTextColor="BDBDBD"
            value={comment}
            multiline
          />
          <Pressable onPress={handleCommentAdd} style={styles.addCommentBtn}>
            <Ionicons name="arrow-up-outline" size={18} color="#FFFFFF" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  wrapper: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 32,
    backgroundColor: "black",
    borderRadius: 8,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
    marginBottom: 32,
  },
  inputWrapper: {
    width: "100%",
    minHeight: 50,
    marginTop: 15,
    marginBottom: 24,
    paddingLeft: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  input: {
    width: "75%",
  },
  addCommentBtn: {
    width: 34,
    height: 34,
    marginRight: 8,
    borderRadius: 17,
    backgroundColor: "#FF6C00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommentsScreen;
