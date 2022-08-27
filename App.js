import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Layout from "./src/components/Layout";
import useGetRandomImageDog from "./src/hooks/useGetRandomImageDog";

export default function App() {
  const breed = "retriever/golden";

  const { loading, imageDog, error, getRandomImage } =
    useGetRandomImageDog(breed);

  if (loading) {
    return (
      <Layout>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24 }}>Looking for more love...😍 </Text>
        </View>
      </Layout>
    );
  }

  if (error || !imageDog) {
    return (
      <Layout>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24 }}>No dogs found 😢 </Text>
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      <Image source={{ uri: imageDog }} style={styles.image} />
      <Pressable onPress={() => getRandomImage(breed)} style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
          Next 🐶 ❤️{" "}
        </Text>
      </Pressable>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "80%",
    width: "90%",
    borderRadius: 5,
    marginVertical: 12,
  },
  button: {
    backgroundColor: "#ff4c4c",
    padding: 0,
    width: "90%",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
