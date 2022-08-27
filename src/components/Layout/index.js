import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Layout = ({ children, title = "" }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitle}>Dog Therapy 🐶 ❤️</Text>
      </View>
      {title && <Text style={styles.pageSubTitle}>{title}</Text>}
      {children}
    </SafeAreaView>
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
