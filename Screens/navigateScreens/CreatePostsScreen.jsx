import { nanoid } from "nanoid/non-secure";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import LocImg from "../../assets/images/map-pin.png";
import CameraIconImg from "../../assets/images/camera-icon.png";
import TrashIcon from "../../assets/images/trash.png";
import { posts } from "../../Data/posts";

export default CreatePostScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uriPhoto, setUriPhoto] = useState(null);
  const [photoName, setPhotoName] = useState();
  const [terrain, setTerrain] = useState();
  const [location, setLocations] = useState(null);

  const navigation = useNavigation();

  const clear = () => {
    setUriPhoto(null);
    setPhotoName(null);
    setTerrain(null);
    setLocations(null);
  };

  const handlePublish = () => {
    const post = {
      id: nanoid(),
      title: photoName,
      place: terrain,
      coordinates: location,
      img: uriPhoto,
      comments: [],
      likes: 0,
    };

    posts.push(post);
    clear();
    navigation.navigate("PostsScreen");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.photoWrap}>
          {uriPhoto ? (
            <Image source={{ uri: uriPhoto }} style={styles.photo} />
          ) : (
            <Camera type={type} ref={setCameraRef} style={styles.camera}>
              <Pressable
                style={styles.cameraBtn}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                    setUriPhoto(uri);
                    console.log(uri);
                    const locations = await Location.getCurrentPositionAsync(
                      {}
                    );
                    const coords = {
                      latitude: locations.coords.latitude,
                      longitude: locations.coords.longitude,
                    };
                    setLocations(coords);
                  }
                }}>
                <Image source={CameraIconImg}></Image>
              </Pressable>
              <Pressable
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Ionicons
                  name="camera-reverse-outline"
                  size={28}
                  color="white"
                />
              </Pressable>
            </Camera>
          )}
        </View>

        {uriPhoto ? (
          <Text style={styles.downLoadText}>Редагувати фото</Text>
        ) : (
          <Text style={styles.downLoadText}>Завантажте фото</Text>
        )}

        <View style={styles.inputAreaWrap}>
          <TextInput
            type="text"
            placeholder="Назва..."
            value={photoName}
            onChangeText={setPhotoName}
            placeholderTextColor={"#BDBDBD"}
            selectionColor="#212121"
            style={styles.input}></TextInput>
        </View>
        <View style={styles.locWrap}>
          <Image source={LocImg} style={styles.locImg} />
          <View style={styles.inputAreaLocWrap}>
            <TextInput
              type="text"
              placeholder="Місцевість..."
              value={terrain}
              onChangeText={setTerrain}
              placeholderTextColor={"#BDBDBD"}
              selectionColor="#212121"
              style={styles.input}></TextInput>
          </View>
        </View>
        {uriPhoto && photoName && terrain ? (
          <Pressable
            style={[styles.publishBtn, { backgroundColor: "#FF6C00" }]}
            onPress={() => handlePublish()}>
            <Text style={[styles.btnTitle, { color: "#fff" }]}>
              Опублікувати
            </Text>
          </Pressable>
        ) : (
          <TouchableHighlight
            style={[styles.publishBtn, { backgroundColor: "#F6F6F6" }]}
            onPress={() => Alert.alert("All inputs must be filled")}>
            <Text style={[styles.btnTitle, { color: "#BDBDBD" }]}>
              Опублікувати
            </Text>
          </TouchableHighlight>
        )}

        <Pressable style={styles.clearBtn} onPress={clear}>
          <Image source={TrashIcon} size={24} color="#BDBDBD" />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },

  camera: { flex: 1 },

  photoWrap: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  locImg: {
    width: 24,
    height: 24,
  },
  locWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginBottom: 52,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputAreaWrap: {
    height: 50,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputAreaLocWrap: {
    width: "100%",
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
  },
  downLoadText: {
    marginBottom: 25,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    color: "#BDBDBD",
  },
  cameraBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    opacity: 0.5,
  },
  flipContainer: {
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingLeft: 10,
  },
  input: {
    width: "100%",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
  },
  publishBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -25,
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 51,
    borderRadius: 100,
  },
  clearBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
