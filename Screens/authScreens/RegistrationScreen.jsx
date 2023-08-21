import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const initialFocuseState = {
  username: false,
  email: false,
  password: false,
};

const RegistrationScreen = ({ isAuth }) => {
  const navigation = useNavigation();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocusInput, setIsFocusInput] = useState(initialFocuseState);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const openPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const handleRegistration = () => {
    navigation.navigate("Home");

    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    isAuth = true;
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/imageBG.png")}
          style={styles.imageBg}>
          <View
            style={{
              ...styles.formWrapper,
              ...Platform.select({
                ios: {
                  marginTop: isShowKeyboard ? 350 : 219,
                },
                android: {
                  marginTop: isShowKeyboard ? -100 : 0,
                },
              }),
            }}>
            <View style={styles.avatarBox}>
              {isShowKeyboard && (
                <Image source={require("../../assets/images/avatar.png")} />
              )}
              <Image
                style={{
                  ...styles.iconImage,
                  right: isShowKeyboard ? -18 : -12,
                  bottom: isShowKeyboard ? 8 : 14,
                }}
                source={
                  isShowKeyboard
                    ? require("../../assets/images/add_grey.png")
                    : require("../../assets/images/add.png")
                }
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View
              style={{
                paddingBottom: isShowKeyboard ? 32 : 45,
              }}>
              <View style={styles.inputUserName}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocusInput.username ? "#FF6C00" : "#F6F6F6",
                    backgroundColor: isFocusInput.username
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  textAlign={"left"}
                  placeholderTextColor={"#BDBDBD"}
                  textContentType="username"
                  value={state.username}
                  placeholder="Логін"
                  onFocus={() => {
                    setIsShowKeyboard(true),
                      setIsFocusInput({
                        ...isFocusInput,
                        username: true,
                      });
                  }}
                  onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      username: false,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      username: value,
                    }))
                  }
                />
              </View>
              <View style={styles.inputMail}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocusInput.email ? "#FF6C00" : "#F6F6F6",
                    backgroundColor: isFocusInput.email ? "#FFFFFF" : "#F6F6F6",
                  }}
                  textAlign={"left"}
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={state.email}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => {
                    setIsShowKeyboard(true),
                      setIsFocusInput({
                        ...isFocusInput,
                        email: true,
                      });
                  }}
                  onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      email: false,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
              </View>
              <View style={styles.inputPassword}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocusInput.password ? "#FF6C00" : "#F6F6F6",
                    backgroundColor: isFocusInput.password
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  textAlign={"left"}
                  placeholderTextColor={"#BDBDBD"}
                  textContentType="password"
                  value={state.password}
                  secureTextEntry={secureTextEntry}
                  placeholder="Пароль"
                  onFocus={() => {
                    setIsShowKeyboard(true),
                      setIsFocusInput({
                        ...isFocusInput,
                        password: true,
                      });
                  }}
                  onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      password: false,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <Text style={styles.showPass} onPress={openPassword}>
                  {secureTextEntry ? "Показати" : "Сховати"}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={handleRegistration}>
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                <Text style={styles.formLink}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },
  avatarBox: {
    position: "absolute",
    left: "35%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconImage: {
    position: "absolute",
  },

  avatar: {
    width: "100%",
    height: "100%",
  },
  addAvatarBth: {
    position: "absolute",
    right: -12.5,
    top: 80,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    paddingLeft: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
  },
  inputUserName: {
    marginTop: 32,
  },
  inputMail: {
    marginTop: 16,
  },
  inputPassword: {
    marginTop: 16,
  },
  showPass: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 16,
    position: "absolute",
    top: 16,
    right: 16,
    color: "#1B4371",
  },
  btn: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
  },
  formLink: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
