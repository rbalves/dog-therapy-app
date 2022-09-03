import { Text, View } from "react-native";
import Layout from "../Layout";

const NotFound = () => {
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>No dogs found 😢 </Text>
      </View>
    </Layout>
  );
};

export default NotFound;
