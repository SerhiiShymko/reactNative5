import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  //   const navigation = useNavigation();
  const [photo, setPhoto] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <View style={styles.photo}>
          <Image style={styles.photoImg} />
          <TouchableOpacity style={styles.addPhoto}>
            <Ionicons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addPhoto}>
          <Ionicons name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <Text style={styles.photoText}>Завантажте фото</Text>
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        placeholderTextColor="#BDBDBD"
        marginTop={32}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
          paddingLeft={28}
        />
        <Ionicons
          name="location-outline"
          size={24}
          color="#BDBDBD"
          style={styles.inputIcon}
        />
      </View>

      <TouchableOpacity
        style={{
          ...styles.buttonCreate,
          backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
        }}
        activeOpacity={0.7}>
        <Text
          style={{
            ...styles.buttonCreateText,
            color: photo ? "#FFFFFF" : "#BDBDBD",
          }}>
          Опублікувати
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  input: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapper: {
    position: "relative",
    marginTop: 16,
  },
  inputIcon: {
    position: "absolute",
    top: 13,
    left: 16,
  },
  buttonCreate: {
    marginHorizontal: 16,
    marginTop: 32,
    borderRadius: 100,
  },
  buttonCreateText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    paddingVertical: 16,
  },
  camera: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 240,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    marginHorizontal: 16,
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  addPhoto: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    top: 90,
    left: 142,
  },
  photo: {
    position: "absolute",
    width: "100%",
    height: "100%",
    right: 0,
    borderColor: "#fff",
    backgroundColor: "##F6F6F6",
  },
  photoImg: {
    width: "100%",
    height: "100%",
  },
});

export default CreatePostsScreen;
