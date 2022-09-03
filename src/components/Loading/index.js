import { Text, View } from "react-native";
import Layout from "../Layout";

const Loading = () => {
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Looking for more love...😍 </Text>
      </View>
    </Layout>
  );
};

export default Loading;
