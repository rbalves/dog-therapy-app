import { StyleSheet, Text, View } from "react-native";

import { Center, NativeBaseProvider } from "native-base";

const Layout = ({ children, title = "" }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" safeArea>
        <View>
          <Text style={styles.pageTitle}>Dog Therapy 🐶 ❤️</Text>
        </View>
        {title && <Text style={styles.pageSubTitle}>{title}</Text>}
        {children}
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
  },
  pageTitle: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
  },
  pageSubTitle: {
    fontSize: 24,
    lineHeight: 40,
    fontWeight: "bold",
  },
});

export default Layout;
