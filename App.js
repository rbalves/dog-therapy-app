import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Layout from "./src/components/Layout";
import Loading from "./src/components/Loading";
import NotFound from "./src/components/NotFound";
import useGetRandomImageDog from "./src/hooks/useGetRandomImageDog";

export default function App() {
  const breed = "retriever/golden";

  const { loading, imageDog, error, getRandomImage } =
    useGetRandomImageDog(breed);

  if (error || !imageDog) {
    return <NotFound />;
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
