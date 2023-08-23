import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

// import { posts } from "../../Data/posts";
// import Post from "../components/Post";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/imageBG.png")}
        resizeMode="cover"
        style={styles.imageBg}
      />
      <View
      // style={{
      //   ...styles.formWrapper,
      //   ...Platform.select({
      //     ios: {
      //       marginTop: isShowKeyboard ? 350 : 219,
      //     },
      //     android: {
      //       marginTop: isShowKeyboard ? -100 : 0,
      //     },
      //   }),
      // }}
      >
        <View style={styles.avatarBox}>
          <Image source={require("../../assets/images/avatar.png")} />
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  imageBg: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  avatarBox: {
    position: "relative",
    width: "100%",
    height: "100%",
    marginTop: 147,
    paddingTop: 92,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 33,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 1.01,
  },
});

export default ProfileScreen;
