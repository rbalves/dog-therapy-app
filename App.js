import { useState } from "react";

import { Image, Pressable, StyleSheet, Text } from "react-native";

import { CheckIcon, Select } from "native-base";

import Layout from "./src/components/Layout";
import Loading from "./src/components/Loading";
import NotFound from "./src/components/NotFound";

import useGetAllBreeds from "./src/hooks/useGetAllBreeds";
import useGetRandomImageDog from "./src/hooks/useGetRandomImageDog";

export default function App() {
  const [breedSelected, setBreedSelected] = useState("retriever/golden");

  const { breeds, error: errorGetBreeds, loading: loadingGetBreeds } = useGetAllBreeds();

  const { loading: loadingGetImage, imageDog, error: errorGetImage, getRandomImage } = useGetRandomImageDog(breedSelected);

  if (loadingGetImage || loadingGetBreeds) {
    return <Loading />;
  }

  if (errorGetImage || errorGetBreeds) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Select
        selectedValue={breedSelected}
        minWidth="100%"
        minHeight="50"
        accessibilityLabel="Choose Breed"
        placeholder="Choose Breed"
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setBreedSelected(itemValue);
          getRandomImage(itemValue);
        }}
      >
        {breeds.map(({ label, value }) => (
          <Select.Item key={value} label={label} value={value} />
        ))}
      </Select>
      <Image source={{ uri: imageDog }} style={styles.image} />
      <Pressable
        onPress={() => getRandomImage(breedSelected)}
        style={styles.button}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
          Next
        </Text>
      </Pressable>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "75%",
    width: "100%",
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
    width: "100%",
  },
});
